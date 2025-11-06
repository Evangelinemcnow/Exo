// Exo 1

function afficherMessage(message) {
    setTimeout(() => {
        console.log(message);
    }, 2000);
};
afficherMessage("Bonjour DWWM !");

// Exo 2

function Etap1() {
    setTimeout(() => {
        console.log("Etape 1 terminée");
    }, 1000);
}
function Etap2(callback) {
    setTimeout(() => {
        console.log("Etape 2 terminée");
        callback();
    }, 1000);
}
function Etap3(callback) {
    setTimeout(() => {
        console.log("Etape 3 terminée");
        callback();
    }, 1000);
}

Etap1(() => {
    Etap2(() => {
        Etap3(() => {
            console.log("toutes les étapes sont terminées");
        });
    });
});

// Exo 3

function telerchargerFichier() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fichier téléchargé avec succès")
        }, 2000);
    });
}
telerchargerFichier().then(message => console.log(message));

//Exo 4 

function telerchargerFichier2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes = Math.random() < 0.5;
            if (succes) {
                resolve("Fichier téléchargé avec succès");
            } else {
                reject("Échec du téléchargement");
            }
        }, 2000);
    });
}
telerchargerFichier2()
    .then(message => console.log(message))
    .catch(erreur => console.log(erreur));

// Exo 5

function Etape1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Etape 1 résolue")
        }, 1000);
    });
}
function Etape2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Etape 2 résolue")
        }, 1000);
    });
}
function Etape3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Etape 3 résolue")
        }, 1000);
    });
}
Etape1()
    .then(msg1 => {
        console.log(msg1);
        return Etape2();
    })
    .then(msg2 => {
        console.log(msg2);
        return Etape3();
    })
    .then(msg3 => {
        console.log(msg3);
        console.log("J'ai fini")
    });

// Exo 6

function Etape1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Etape 1 résolue")
        }, 1000);
    });
}
function Etape2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Etape 2 résolue")
        }, 1000);
    });
}
function Etape3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Etape 3 résolue")
        }, 1000);
    });
}

async function Etape0() {
    const msg4 = await Etape1();
    console.log(msg4);
    const msg5 = await Etape2();
    console.log(msg5);
    const msg6 = await Etape3();
    console.log(msg6);
    console.log("Tout est fini maintenant")
}
Etape0();

// Exo 7

async function lancerTelechargement() {
    try {
        const message1 = await telerchargerFichier2();
        console.log(message1);
    } catch (error) {
        console.error(error);
    }
}
telerchargerFichier2();