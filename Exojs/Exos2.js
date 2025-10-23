//1 Bonjour à toi Javascript

let nom = prompt("Bonjour, quel est ton nom ?");
console.log(`Bonjour ${nom}`);

//2 Noël

let pair = prompt("Donne moi un nombre");
pair = Number(pair);
if (pair % 2 === 0) {
    console.log("Ton nombre est pair")
} else {
    console.log("Ton nombre est impair")
}

//3 Julien > all 

let comparateur1 = Number(prompt("Donne moi un nombre"));
let comparateur2 = Number(prompt("Donne moi un deuxième nombre"));
if (comparateur1 < comparateur2) {
    console.log(`Le nombre ${comparateur1} est plus petit que ${comparateur2}`)
} else if (comparateur1 > comparateur2) {
    console.log(`Le nombre ${comparateur1} est plus grand que ${comparateur2}`)
} else {
    console.log("Les deux nombres sont égaux")
}

//4 Nate River

let N = Number(prompt("Donne moi un nombre et je calculerais la somme des entiers de 1 jusqu'a lui"));
let somme1 = 0;
for (let i = 1; i <= N; i++) {
    somme1 += i;
}
console.log(`La somme des entiers de 1 à ${N} est de ${somme1}`);

//5 Tion

let Table = Number(prompt("Donne moi un nombre et je te donnerais sa table de multiplication"));
for (let i = 1; i <= 50; i++) {
    console.log(`${Table} * ${i} = ${Table * i }`);
}

//6 42

let Tablo2 = [12, 5, 8, 130, 44];
let somme = 0;
for (let i = 0; i < Tablo2.length; i++) {
    somme += Tablo2[i];
}

let moyenne = somme /Tablo2.length;
console.log(`La moyenne des nombres est ${moyenne}`);

//7 Ok Mendeleïev

let recherche = prompt("Donne moi un nom et je te dirais s'il est cool");
let nomcool = ["Luna", "Serge", "Jeanne", "Monsieur ours", "Helio", "Bjorg"];
if (nomcool.includes(recherche)) {
    console.log(`${recherche} est un nom cool`)
} else {
    console.log(`${recherche} est low`)
}

//8 min-max

let grand = Math.max(Tablo2);
let petit1 = Math.min(Tablo2);
console.log(`Le plus grand nombre est ${...grand}`);
console.log(`Le plus petit nombre esst ${...petit1}`);

//9 uaelbat

function inverser(tab) {
    let tableau = [];
    for (let i = tab.length - 1; i >= 0; i--) {
        tableau.push(tab[i]);
    }
    return tableau;
}

let resultat = inverser(Tablo2);
console.log(resultat);

//10 6

let compter = prompt("Donne moi une phrase et j'en compterais les voyelles");
let voyelles = "aeiouyAEIOUY";
let somme2 = 0;
for (let i = 0; i < compter.length; i++) {
    if (voyelles.includes(compter[i])) {
        somme2++;
    }
}
console.log(`Ta phrase compte ${somme2} voyelles`);

//11 Yakak

let motUtilisateur = prompt("Entre un mot :");
Palindrome(motUtilisateur);
    function Palindrome(mot) {
    mot = mot.toLowerCase();
    let inverse = "";
    for (let i = mot.length - 1; i >= 0; i--) {
        inverse += mot[i];
    }
    if (mot === inverse) {
        console.log(`${mot} est un palindrome `);
    } else {
        console.log(`${mot} n'est pas un palindrome `);
    }
}

//12 Factorio

function Factorio(n) {
    let resultat = 1;
    for (let i =1; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}
let nombre = Number(prompt("Ecris un nombre"));
console.log(`${nombre}! = ${Factorio(nombre)}`);

//13 Maccheroni 

function fibonacci(n) {
    const suite = [0, 1];
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    return suite.slice(0,n);
}
console.log(fibonacci(1));

//14 Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft

function Long(phrase) {
    let motlepluslong ="";
    const mots = phrase.toLowerCase().split(" ");
    for (let mot of mots) {
        if (mot.length > motlepluslong.length) {
            motlepluslong = mot;
        };
    };
    return motlepluslong;
    };
console.log(Long("La conscience est la dernière et la plus tardive évolution de la vie organique, et par conséquent ce qu'il y a de moins accompli et de plus fragile en elle."))

//15 

function estPremier(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        } else {
            return true
        }
    }
}
console.log(estPremier(73));
console.log(estPremier(128));

//16 mesNotes < 10 toute ma vie

const notes = [12, 8, 17, 4, 15];
function Filtre(notes) {
    const Notes10 = [];
    for (let note of notes) {
        if (note > 10) {
        Notes10.push(note);
        }
    }
    return Notes10;
}
console.log(Filtre(notes));

//17 Luna FTW

const eleves = [
    {nom: "Bjorg", note: 12},
    {nom: "Helio", note: 8},
    {nom: "Luna", note: 17}
];
function Classe(eleves) {
    let somme = 0;
    let meilleur = eleves[0];
    for (let eleve of eleves) {
        somme += eleve.note;
        if (eleve.note > meilleur.note) {
            meilleur = eleve;
        }
    }
    let avg = somme/eleves.length
    console.log(`moyenne : ${avg}`);
    console.log(`meilleur élève : ${meilleur.nom}`)
}

//18 Force

function TriElevesParNote(eleves) {
        return eleves.sort((a, b) => b.note - a.note);
    }
    console.log(TriElevesParNote(eleves));

//19 Za Hando

    function SupprimerEleveParNom(eleves, nomASupprimer) {
        return eleves.filter(eleve => eleve.nom !== nomASupprimer);
    }
    const elevesMisAJour = SupprimerEleveParNom(eleves, "Bob");
    console.log(elevesMisAJour);

//20 Apartheid

    const produits = [
        { nom: "Tomate", categorie: "Fruit" },
        { nom: "rhubarbe", categorie: "Légume" },
        { nom: "Olive", categorie: "Fruit" }
    ];

    function RegrouperParCategorie(produits) {
        return produits.reduce((acc, produit) => {
            if (!acc[produit.categorie]) {
                acc[produit.categorie] = [];
            }
            acc[produit.categorie].push(produit.nom);
            return acc;
        }, {});
    }

    console.log(RegrouperParCategorie(produits));

//21 Adriengrammes

function estAnagramme(mot1, mot2) {

    let mot1Norm = mot1.toLowerCase().replace(/[^a-z0-9]/g, '');
    let mot2Norm = mot2.toLowerCase().replace(/[^a-z0-9]/g, '');
    let lettres1 = mot1Norm.split()
    let lettres2 = mot2Norm.split()
    lettres1 = lettres1.sort()
    lettres2 = lettres2.sort()
    if (lettres1.join('') === lettres2.join('')) { 
        return console.log(${mot1} et ${mot2} sont bien des anagrames);
    } else {
        return console.log(${mot1} et ${mot2} ne sont pas des anagrames);
    };
    };
    estAnagramme('Saucisse', 'Sissecau');
    estAnagramme('encéphalogramme', 'courgette');

//22 On appelle ça un barde

function motComptage(phrase) {
        let phraseNorm = phrase.trim();
        let mots = phraseNorm.split(/\s+/);
        return console.log(La longeur de ta phrase (${phrase}) est de : ${mots.length} mots);
    }
    motComptage("Bonjour tout le monde");
    motComptage("   Les développeurs  codent  bien   ");
    motComptage("Un seulmot");

//23 Personne peut nous canaliser

function trierParLongueur(mots) {
    return [...mots].sort((a, b) => a.length - b.length);
}
const mots = ["psychopharmacologie", "thermoélectriquement", "hypercholestérolémie", "antidémocratiquement"];
const motsTries = trierParLongueur(mots);

console.log(motsTries);

//24 perfectly balanced as all things should be

function parenthesesCorrectes(chaine) {
    let compteur = 0;

    for (let char of chaine) {
        if (char === "(") {
            compteur++; 
        } else if (char === ")") {
            compteur--; 
            if (compteur < 0) {
                return false;
            }
        }
    }
    return compteur === 0; 
}
console.log(parenthesesCorrectes("(()())")); 
console.log(parenthesesCorrectes("(()"));    
console.log(parenthesesCorrectes("())("));   
console.log(parenthesesCorrectes("()()()")); 

