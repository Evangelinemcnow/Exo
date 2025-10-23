1

let Prenom = "Evangeline";
let Age = 28;
let Ville = "Strasbourg";
console.log(`Je m'appelle ${Prenom}, j'ai ${Age} ans et j'habite à ${Ville}.`);

2

let a = 12;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

3

let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

4

if (Age < 18 ) {
    console.log("Tu es mineure");
} else if (Age >= 18 && Age <= 64) {
    console.log("Tu es adulte");
} else {
    console.log("Tu es senior")
}

5

let Temperature = 22;
let Message = (Temperature >= 25) ? "Il fais chaud" : "Il fais frais";
console.log(Message)

6

for (let i = 1; i <= 10; i++) {
console.log(i);
};

7

for (let i =1; i <= 20; i++ ) {
    if (i % 2 ===0) {
        console.log(i)
    }
};

8

let fruits = ["Litchi", "Pomme", "Raisin"];
fruits.push("Grenade");
fruits.shift();
console.log(fruits.length);
for (let fruit of fruits) {
    console.log(fruit);
};

9

let nombres = [3, 8, 12, 5, 9];
console.log(nombres[0], nombres[4]);
console.log(nombres.includes(8));
console.log(nombres.indexOf(5));
console.log(nombres.sort((a,b) => a - b));

10

function direBonjour() {
    console.log("Bonjour à tous !")
}

11

function saluer(prenom) {
    console.log(`Bonjour, ${prenom}`)
}
saluer("Evangeline");
saluer("Julien");
saluer("Luna");

12

function addition(a,b) {
    return a + b;
}
const total = addition(8, 7);
console.log(total)

13

let tablo = ["Eva", "Julien", "Helio", "Luna"];
function afficherListe(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }
}
afficherListe(tablo);
tablo.push("Serge");
afficherListe(tablo);

14

function tableDeMultiplication(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    } 
}
tableDeMultiplication(7);

