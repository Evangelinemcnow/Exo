// 1

const nouveau = document.getElementById("titre");
nouveau.textContent = "Bienvenue dans la formation DWWM !"

//2

const rougégras = document.getElementById("message");
rougégras.style.color = "red"; rougégras.style.fontWeight = "bold";

//3

const list = document.querySelectorAll("li");
list.forEach((item) => {
    item.style.color = "blue";
});

//4

const nouvo = document.createElement("div");
nouvo.textContent = "Les DOM sont puissants";
document.body.appendChild(nouvo);

//5 

const fruit = document.getElementById("liste");
const nouvoLi = document.createElement("li")
nouvoLi.textContent = "Litchi";
fruit.appendChild(nouvoLi);

// 6

const deuxiemeLi = document.querySelector("#liste li:nth-child(2)");
deuxiemeLi.remove();

//7

const bouton = document.getElementById("btn");
const resultat = document.getElementById("resultat")
bouton.addEventListener("click" , function () {
    resultat.textContent = "bouton cliqué !";
});

//8

const novocolor = document.getElementById("carre");
novocolor.addEventListener("click" , function () {
    if (novocolor.style.backgroundColor === "green") {
        novocolor.style.backgroundColor = "gray"; 
    } else {
        novocolor.style.backgroundColor = "green"; 
    }
});

//9 

const inputPrenom = document.getElementById("prenom");
const bouton2 = document.getElementById("afficherExo9");
const resultat2 = document.getElementById("resultatExo9");
bouton2.addEventListener("click" , function () {
    const Prenom = inputPrenom.value;
    resultat2.textContent = `Bonjour, ${Prenom} !`;
});

//10

const fruits = ["Pomme", "Banane", "Fraise", "Orange"];
const tablo = document.createElement("ul");
fruits.forEach(fruit2 => {
    const li2 = document.createElement("li")
    li2.textContent = fruit2;
    tablo.appendChild(li2);
});
document.body.appendChild(tablo);

//11

const plus = document.getElementById("plus");
const compteur = document.getElementById("compteur");
const moins = document.getElementById("moins");
plus.addEventListener("click" , function () {
    let valeur = parseInt(compteur.textContent);
    valeur = valeur + 1;
    compteur.textContent = valeur;
});
moins.addEventListener("click" , function () {
    let valeur = parseInt(compteur.textContent);
    valeur = valeur - 1;
    compteur.textContent = valeur
});

//12

const input = document.getElementById("item");
const bouton3 = document.getElementById("ajouter");
const liste = document.getElementById("liste");

bouton3.addEventListener("click", function() {
    const texte = input.value.trim(); 

    if (texte !== "") { 
        const li = document.createElement("li");
        li.textContent = texte;
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "❌";
        btnSupprimer.style.marginLeft = "10px";
        btnSupprimer.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(btnSupprimer);
        liste.appendChild(li);
        input.value = "";
    }
});

//13 

