/* SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

//? #1: Chiedere all'utente un numero; 
//? #2: Verificare se il numero è pari o dispari;
//? #3: Se è pari -> stampare il numero scelto;
//? #4: Altrimenti, se è dispari -> stampare il numero successivo.


//TODO: #1: Chiedere all'utente un numero; 
do {
    var userNumbers = parseInt(prompt("Dimmi un numero"));
} while (isNaN(userNumbers))

console.log("Il numero inserito dall'utente è: ", userNumbers);

//TODO: #2 / #3 / #4 
if (userNumbers % 2 === 0) {
    console.log("Numero pari: ", userNumbers);
} else {
    console.log("Numero dispari (aumentato di uno): ", userNumbers + 1);
}

