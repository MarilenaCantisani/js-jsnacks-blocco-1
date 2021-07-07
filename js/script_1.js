/* SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

//? #1: Chiedere all'utente 5 volte un numero con for;
//? #2: Ripetere il ciclo con while.
//? #3: Stampare la somma dei numeri inseriti; 

//TODO: #1: Chiedere all'utente 5 volte un numero con for;
var sum = 0;
/*
for (var i = 1; i <= 5; i++) {
    var userNumbers = parseInt(prompt("Inserisci un numero: (" + i + "/5)"));
    console.log("Numero scelto dall'utente: ", userNumbers);

    if (!isNaN(userNumbers)) {
        sum += userNumbers;
    }
} 
*/

//TODO: #2: Ripetere il ciclo con while.
var i = 1;
while (i <= 5) {
    var userNumbers = parseInt(prompt("Inserisci un numero: (" + i + "/5)"));
    console.log("Numero scelto dall'utente: ", userNumbers);

    if (!isNaN(userNumbers)) {
        sum += userNumbers;
    }
    i++;
}

//TODO:  #3: Stampare la somma dei numeri inseriti; 
var displayElement = document.getElementById("display");

console.log("La somma dei numeri è: ", sum);
displayElement.innerText = "La somma dei numeri è: " + sum + ";";




