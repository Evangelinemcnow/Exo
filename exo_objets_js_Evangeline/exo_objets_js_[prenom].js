const Animal = {
    nom: "Monsieur ours",
    type: "Ours",
    age: "Grand"
};
function description() {
    console.log(`Bonjour ${Animal.nom} de type ${Animal.type}, tu es ${Animal.age}`)
}

const Produits = [
    { nom: "Headhunter", prix: 40, quantité: 2 },
    { nom: "Mageblood", prix: 300, quantité: 1},
    { nom: "An Audience With The King", prix: 0.8, quantité: 7 },
    { nom: "Essence of Delirium", prix: 0.2, quantité: 20 }
]

Produits.forEach(produit => {
    console.log(`Nom : ${produit.nom}, Prix : ${produit.prix}div`);
});

const Voiture = {
    marque: "Peugeot",
    modele: "208",
    annee: 2018
};
console.log(`${Voiture.marque} ${Voiture.modele} de ${Voiture.annee}`)



