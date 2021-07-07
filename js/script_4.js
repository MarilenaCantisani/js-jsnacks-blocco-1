/* SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

//? #1: Creare due array con numero di elementi diversi; 
//? #2: Verificare quale array è più corto; 
//? #3: Aggiungere elementi random all'array più corto, affinchè siano uguali;

//TODO: #1: Creare due array con numero di elementi diversi; 
var list1 = [4, 5, 7, 23, 67, 54, 76];
console.table(list1);

var list2 = [8, 43, 24];
console.table(list2);

//TODO: #1: Verificare quale array è più corto; 
while (list1.length !== list2.length) {
    var numbersRandom = Math.floor(Math.random() * 50) + 1;
    console.log(numbersRandom);

    if (list1.length > list2.length) {
        list2.push(numbersRandom);
    } else {
        list1.push(numbersRandom);
    }
}

console.table(list1);
console.table(list2);

