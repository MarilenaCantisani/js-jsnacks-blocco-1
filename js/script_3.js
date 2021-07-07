/* SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e
una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

//? #1: Creare un array con una lista di nomi; 
//? #2: Creare un array con una lista di cognomi;
//? #3: Creare un array vuoto per la falsa lista di invitati;
//? #4: Randomizzare la pesca di un nome e di un cognome e unirli;
//? #5: Verificare se la combinazione è già presente nell'array;

//TODO: #1: Creare un array con una lista di nomi; 
var firstnamesList = ["Luigi", "Davide", "Marco", "Sara", "Eliana", "Riccardo"];
console.table(firstnamesList);

//TODO: #2: Creare un array con una lista di cognomi;
var lastnamesList = ["Rossi", "Bianchi", "Verdi", "Gialli", "Viola", "Azzurri"];
console.table(lastnamesList);

//TODO: #3: Creare un array vuoto per la falsa lista di invitati;
var fakeList = [];
console.table(fakeList);

//TODO: #4 / #5
while (fakeList.length < 3) {
    var randomFirstname = firstnamesList[Math.floor(Math.random() * firstnamesList.length)];
    var randomLastname = lastnamesList[Math.floor(Math.random() * lastnamesList.length)];

    var nameFakeList = randomFirstname + " " + randomLastname;
    console.log(nameFakeList);

    if (!fakeList.includes(nameFakeList)) {
        fakeList.push(nameFakeList);
    }
}
console.table(fakeList);






