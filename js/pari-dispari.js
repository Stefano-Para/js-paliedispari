// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var evenOrOdd = "";
do {
    evenOrOdd = prompt("\"pari\" o \"dispari\"?");
    console.log("Hai scelto: " + evenOrOdd)
} while (evenOrOdd != "pari" && evenOrOdd != "dispari")

// DO WHILE mi sta dando un obbligo di rimanere nel ciclo (continuare a chiedere di scegliere pari o dispari) obbligandomi SOLO a poter scrivere le mie condizioni: o pari, o dispari.

// var numero = "";
do {
    numero = parseInt(prompt("Inserisci un numero da 1 a 5. "));
    console.log("Hai scelto: " + numero)
} while ((numero < 1) || (numero > 5))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function getRandom(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
}
var numeroPc = getRandom(1, 5)
console.log("Il pc ha scelto: " + numeroPc)

// Sommiamo i due numeri
var sommaTotale = numeroPc + numero;
console.log("La somma è: " + sommaTotale);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if (sommaTotale % 2 == 0) {
    alert("Il risultato è pari");
} else {
    alert("Il risultato è dispari");
}

// Dichiariamo chi ha vinto.
if ((evenOrOdd == "pari" && (sommaTotale % 2 == 0)) || (evenOrOdd == "dispari" && (sommaTotale % 2 !== 0))) {
    alert("Complimenti!! Hai vinto!")
} else {
    alert("Mi dispiace: hai perso.")
}




// condizioni PARI 
// if (evenOrOdd == "pari" && (sommaTotale % 2 == 0)) {
//     alert("COMPLIMENTI! avendo scelto pari Hai vinto!");
// } else {
//     alert("Mi dispiace! Avendo scelto dispari Hai perso.");
// }

// // condizioni DISPARI 
// if (evenOrOdd == "dispari" && (sommaTotale % 2 !== 0)) {
//     alert("COMPLIMENTI! avendo scelto dispari Hai vinto!")
// } else {
//     alert("Mi dispiace! Avendo scelto pari Hai perso.")
// }
