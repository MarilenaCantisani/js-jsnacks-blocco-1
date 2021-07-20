/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
2. stampare la palla in pagina*
3. Attraverso un input dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato (utilizzare bottone)
BONUS: stampare la palla tramite una funzione */

/* --------------------------------- SNACK 2 -------------------------------- */

//* Collect all the variables referring to html elements
var weightElement = document.getElementById("weight");
var buttonElement = document.getElementById("button");
var displayElement = document.getElementById("display");

//* Create a "ball" object: 
var ball = {
    name: "palla",
    weight: 10
};

//* Print the object "ball" on the page:
printObjectElement(ball, displayElement);

// Connect an event to the click of the button 
buttonElement.addEventListener("click", function () {
    var newweight = weightElement.value;

    //Check if the number is valid
    if (!newweight || newweight.trim() === " " || isNaN(newweight)) {
        alert("Attenzione! il valore inserito non è valido!")
        return;
    }
    ball.weight = parseInt(newweight);
    printObjectElement(ball, display);
});




/* -------------------------------- FUNCTION -------------------------------- */
//TODO Function that prints an object
function printObjectElement(obj, idElement) {
    var content = "";
    for (var property in obj) {
        content += "<li><strong>" + property + ":</strong> " + obj[property] + "</li>";
    }
    idElement.innerHTML = content;
}
