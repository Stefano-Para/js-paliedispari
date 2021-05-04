// 1 - Palindroma
// Chiedere all'utente di inserire una parola
var word = prompt("Inserisci qui una parola a tua scelta:");
console.log("parola scelta è " + word)
word = word.toLowerCase();

// prima non c'era il ""
var reversedWord= "";

// giri la parola
for (var i = word.length-1; i >= 0; i--) {
    console.log("la parola è composta da " + word[i]);
    // riempire la variabile reversedWord 
    reversedWord += word[i];
    // la versione estesa è "reversedWord = reversedWord + word[i]" questo fa in modo che dentro a reversedWord finiscano le singole lettere (della parola inseria), al contrario (grazie al ciclo for che fa il giro al "contrario"), e tutte insieme. Se non mettessi += verrebbe fuori solo la prima lettera girata cioè la P.
}
console.log(reversedWord)

if (word == reversedWord) {
    alert("La parola \"" + word + "\" è un palindromo!")
} else {
    alert("La parola \"" + word + "\" non è un palindromo!")
}
    
    

// era possibile sviluppare l'esercizio con split (divide la stringa in un array) => reverse (fa in modo che l'array venga riempito al contrario dell'array originale) => join (fa si che l'array diventi una stringa). parola - array - rovescio - stringa - parola.




