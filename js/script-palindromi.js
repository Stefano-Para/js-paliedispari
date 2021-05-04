// 1 - Palindroma
// Chiedere all'utente di inserire una parola
var word = prompt("Inserisci qui una parola a tua scelta:");
console.log("parola scelta è " + word)

var reversedWord= "";

// prima non c'era il ""



// giri la parola

for (var i = word.length-1; i >= 0; i--) {
    // riempire la variabile reversedWord 
    console.log("la parola è composta da " + word[i]);
    reversedWord += word[i];
    // questo fa in modo che dentro a reversedWord finiscano le singole lettere (della parola inseria), al contrario (grazie al ciclo for che fa il giro al "contrario"), e tutte insieme. Se non mettessi += verrebbe fuori solo la prima lettera girata cioè la P.
}
console.log(reversedWord)

if (word == reversedWord) {
    alert("La parola è un palindromo!")
} else {
    alert("La parola non è un palindromo")
}
    
    





// controllo se coincidono
//if(word == reversedWord) {
//     alert("hai scelto un palindromo.")
// } else { 
//     alert("non è un palindromo")
// }




