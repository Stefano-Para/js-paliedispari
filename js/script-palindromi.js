// 1 - Palindroma
// Chiedere all'utente di inserire una parola
var word = prompt("Inserisci qui una parola a tua scelta:");
console.log("parola scelta è " + word)

var reversedWord="";

// prima non c'era il ""



// giri la parola

for (i = word.length-1; i >= 0; i--) {
    // riempire la variabile reversedWord 
    console.log("la parola è composta da " + word[i]);
    reversedWord += word[i];
    console.log(reversedWord)
    // reverseWord.push(word[i]) <--- NO!! solo con array
    // reverseWord += lettera...
}

if (word == reversedWord) {
    alert("palindromo")
} else {
    alert("non è palindromo")
}
    
    





// controllo se coincidono
//if(word == reversedWord) {
//     alert("hai scelto un palindromo.")
// } else { 
//     alert("non è un palindromo")
// }




