document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');
    const resultsDiv = document.getElementById('results');
    const results2Div = document.getElementById('results2');
    const aside = document.getElementById('recent-list');

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function afficherHistorique() {
        if (!aside) return;
        const list = aside.querySelector('ul');
        list.innerHTML = '';
        if (localStorage.length === 0) {
            list.innerHTML = '<li class="text-gray-400">Aucune recherche enregistrée.</li>';
            return;
        }

        Object.keys(localStorage).forEach(query => {
            const li = document.createElement('li');
            li.className = 'cursor-pointer hover:text-cyan-400 transition-colors';
            li.textContent = query;
            li.addEventListener('click', () => afficherFilmsDepuisLocalStorage(query));
            list.appendChild(li);
        });
    }

    function afficherFilmsDepuisLocalStorage(query) {
        const stored = localStorage.getItem(query);
        if (!stored) return;
        const films = JSON.parse(stored);

        resultsDiv.innerHTML = '';
        results2Div.innerHTML = '';

        films.forEach(film => {
            const card = document.createElement('div');
            card.className = 'bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer';
            const title = decodeHtml(film['#TITLE'] || 'Titre inconnu');
            const image = film['#IMG_POSTER'] || null;

            if (image) {
                card.innerHTML = `
        <img src="${image}" alt="${title}" class="w-full max-h-64 object-contain rounded-lg shadow-md bg-gray-700">
        <div class="p-4">
            <h3 class="text-lg font-semibold">${title}</h3>
        </div>`;
            } else {
                card.innerHTML = `<div class="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 text-sm rounded-lg shadow-md">
            Pas d'image
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold">${title}</h3>
        </div>`;
            }

            card.addEventListener('click', () => afficherDetailsFilm(film['#IMDB_ID']));
            resultsDiv.appendChild(card);
        });
    }

    async function afficherDetailsFilm(imdbId) {
        if (!imdbId) return;
        results2Div.innerHTML = `<p class="text-gray-400 text-center py-10">Chargement des détails...</p>`;

        try {
            const url = `https://imdb.iamidiotareyoutoo.com/search?tt=${encodeURIComponent(imdbId)}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
            const data = await response.json();

            if (!data.short) {
                results2Div.innerHTML = '<p class="text-red-400 text-center">Aucune info disponible pour ce film.</p>';
                return;
            }

            const short = data.short;

            results2Div.innerHTML = `
        <div class="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 md:gap-6 text-gray-200">
        <img src="${short.image || ''}" alt="${decodeHtml(short.name)}"
            class="w-full max-w-xs md:w-64 h-auto object-cover rounded-lg shadow-md flex-shrink-0">

        <div class="flex-1 px-2 md:px-0 break-words">
            <h2 class="text-2xl font-bold mb-2">${decodeHtml(short.name)}</h2>
            <p class="mb-2"><a href="${short.url}" target="_blank" class="text-cyan-400 underline hover:text-cyan-500">Lien IMDb</a></p>
            <p class="text-gray-300 break-words">${decodeHtml(short.description || 'Pas de description')}</p>
        </div>
        </div>
    `;
        } catch (error) {
            console.error('Erreur détails film :', error);
            results2Div.innerHTML = '<p class="text-red-400 text-center">Erreur lors de la récupération des détails.</p>';
        }
    }

    async function chercherFilms(query) {
        if (!query) return;
        resultsDiv.innerHTML = `
    <div class="col-span-full flex justify-center items-center text-gray-400 py-10">
        <svg class="animate-spin h-6 w-6 mr-2 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Recherche en cours...
    </div>
    `;
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        try {
            const url = `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(query)}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
            const data = await response.json();

            if (!data.description || data.description.length === 0) {
                resultsDiv.innerHTML = "<p class='col-span-full text-center text-gray-400'>Aucun résultat trouvé 😢</p>";
                return;
            }

            const top8 = data.description.slice(0, 8);
            localStorage.setItem(query, JSON.stringify(top8));
            afficherHistorique();
            afficherFilmsDepuisLocalStorage(query);

        } catch (error) {
            console.error('Erreur API :', error);
            resultsDiv.innerHTML = "<p class='col-span-full text-center text-red-400'>Erreur lors de la requête 😬</p>";
        } finally {
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    btn.addEventListener('click', () => {
        const query = input.value.trim();
        if (query) chercherFilms(query);
    });

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = input.value.trim();
            if (query) chercherFilms(query);
        }
    });

    afficherHistorique();
});
