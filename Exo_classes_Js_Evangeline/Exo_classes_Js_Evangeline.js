// Exercice 1 - Classe simple : Créer une classe Personne
// Objectif : Découvrir la syntaxe d'une classe et de son constructor.

function exo1() {

    class Personne {
        constructor(prenom, age) {
            this.prenom = prenom;
            this.age = age;
        }
        sePresenter() {
            console.log(`Bonjour, je m'apelle ${this.prenom} et j'ai ${this.age} ans.`);
        }
    }
    const p1 = new Personne("Evangeline", 28);
    p1.sePresenter();
};


// Exercice 2 - Méthodes et mise à jour : Classe Voiture
// Objéctif : Manipuler des méthodes et des propriétés internes.

function exo2() {

    class Voiture {
        constructor(marque, modele, kilometrage) {
            this.marque = marque;
            this.modele = modele;
            this.kilometrage = kilometrage;
        }
        rouler(distance) {
            this.kilometrage += distance;
            console.log(`Vous avez parcouru ${distance} km. Votre kilometrage actuel est de ${this.kilometrage}`);
        }
        afficherInfos() {
            console.log(`Votre voiture est une ${this.marque}, de modèle ${this.modele}. Elle à un kilometrage de ${this.kilometrage}km`);
        }
    }
    const v1 = new Voiture("Renault", "Clio", 15000);
    v1.rouler(300);
    v1.afficherInfos();
};

// Exercice 3 : Héritage classe Employe et Manager
// Objectif : comprendre l'héritage entre classes (extebds, super).

function exo3() {

    class Employe {
        constructor(nom, poste, salaire) {
            this.nom = nom;
            this.poste = poste;
            this.salaire = salaire;
        }
        afficherSalaire() {
            console.log(`Le salaire de ${this.nom} est de ${this.salaire}€ au poste de ${this.poste}`);
        }
    }

    class Manager extends Employe {
        constructor(nom, poste, salaire, equipe = []) {
            super(nom, poste, salaire);
            this.equipe = equipe;
        }
        afficherEquipe() {
            console.log(`Equipe de ${this.nom} : ${this.equipe}`)
        }
    }
    const m1 = new Manager("Luna", "Chef de projet", 40000000, ["Squick", "chipchip", "Poulpi"]);
    m1.afficherSalaire();
    m1.afficherEquipe();
};

// Encapsulation et getters/setters
// Objectif : Utiliser les accesseurs (get et set)

function exo4() {

    class CompteBancaire {
        constructor(Soldeinitial = 0) {
            this._solde = Soldeinitial;
        }
        get solde() {
            return this._solde
        }
        set solde(nouveauSolde) {
            if (nouveauSolde >= 0) {
                this._solde = nouveauSolde;
            } else {
                console.log("Le solde ne peux pas être négatif");
            }
        }
        deposer(montant) {
            if (montant > 0) {
                this._solde += montant;
                console.log(`Vous avez rajouté ${montant}€ à votre compte`)
            } else {
                console.log("Erreur : le montant doit être supérieur à 0€")
            }
        }
        retirer(montant) {
            if (montant > 0 && this._solde - montant >= 0) {
                this._solde -= montant;
                console.log(`Vous avez retiré ${montant}€ à votre compte`)
            } else {
                console.log("Erreur : le montant doit être supérieur à 0€")
            }
        }
    }
    const c1 = new CompteBancaire();
    c1.deposer(100);
    c1.retirer(50);
    console.log(c1.solde);
};

// Exercice 5 - Polymorphisme : Classe Forme et sous-classs
// Objectif : Appliquer le concept de polymorphisme avec des méthodes redéfinies.

function exo5() {

    class Forme {
        Surface() {
            return "Surface non définie"
        }
    }

    class Carre extends Forme {
        constructor(cote) {
            super();
            this.cote = cote;
        }
        surface() {
            return this.cote * this.cote
        }
    }

    class Cercle extends Forme {
        constructor(rayon) {
            super();
            this.rayon = rayon;
        }
        surface() {
            return Math.PI * this.rayon ** 2
        }
    }
    const f1 = new Carre(4);
    console.log(f1.surface());
    const f2 = new Cercle(3);
    console.log(f2.surface());
};

// Exercice 6 - Classe avec collection d'objets : Biblioteque
// Objectif : Gérer des objets à l'intérieur d'un autre objet.

function exo6() {

    class Livre {
        constructor(titre, auteur, disponible = true) {
            this.titre = titre;
            this.auteur = auteur;
            this.disponible = disponible
        }
    }
    class Biblioteque {
        constructor() {
            this.livres = [];
        }
        ajouterLivre(livre) {
            this.livres.push(livre);
        }
        afficherLivres() {
            this.livres.forEach(livre => (
                console.log(`${livre.titre}, ${livre.auteur}, disponible : ${livre.disponible}`)))
        }
        emprunter(titre) {
            const livre = this.livres.find(livre => livre.titre === titre)
            if (!livre) {
                console.log("Ce livre n'existe pas")
                return
            }
            if (!livre.disponible) {
                console.log("Ce livre n'est pas disponible")
                return
            }
            livre.disponible = false;
            console.log(`Livre emprunté : ${livre.titre}`)
        }
    }
    const Biblio = new Biblioteque();
    Biblio.ajouterLivre(new Livre("1984", "George Orwell", true));
    Biblio.ajouterLivre(new Livre("Le petit Prince", "St exupery", true));
    Biblio.ajouterLivre(new Livre("Eragon", "Je sais pas", false));
    Biblio.emprunter("1984");
    Biblio.emprunter("Eragon");
    Biblio.emprunter("Feur");
    Biblio.afficherLivres();
}

// Exercice 7 - Classe Statique et utilitaire
// Objectif : Découvrir les méthodes statiques.

function exo7() {

    class MathUtils {
        static addition(a, b) {
            return a + b
        }
        static soustraction(a, b) {
            return a - b
        }
        static aireCercle(rayon) {
            return Math.PI * rayon ** 2
        }
    }
    console.log(MathUtils.addition(5, 3));
    console.log(MathUtils.aireCercle(2));
    console.log(MathUtils.soustraction(5, 2));
};