/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione */

/* --------------------------------- SNACK 1 -------------------------------- */

//* Create a link variable to an html element:
var displayElement = document.getElementById("display");

//* Create a "ball" object: 
var ball = {
    name: "palla",
    weight: 10
};

//* Print the object "ball" on the page:
printObjectElement(ball, displayElement);

//* Ask the user to change the weight: 
do {
    var userWeight = prompt("Dimmi il nuovo peso della palla");
} while (!userWeight || userWeight.trim() === " " || isNaN(userWeight));

//* Insert the new weight: 
ball.weight = parseInt(userWeight);

//* Print the new weight:
printObjectElement(ball, display);
console.log(ball);




/* -------------------------------- FUNCTION -------------------------------- */
//TODO Function that prints an object
function printObjectElement(obj, idElement) {
    var content = "";
    for (var property in obj) {
        content += "<li><strong>" + property + ":</strong> " + obj[property] + "</li>";
    }
    idElement.innerHTML = content;
}
