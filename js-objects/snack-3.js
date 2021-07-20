/* Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "name", "city" "points";
Stampiamo le squadre in pagina, all'interno di una tabella HTML */

/* --------------------------------- SNACK 3 -------------------------------- */
var tBody = document.querySelector("table > tbody");
var content = "";

var footballTeams = [
    {
        name: "Inter",
        city: "Milano",
        points: "23"
    },
    {
        name: "Atalanta",
        city: "Bergamo",
        points: "12"
    },
    {
        name: "Juventus",
        city: "Torino",
        points: "32"
    }
];

console.table(footballTeams);


for (var i = 0; i < footballTeams.length; i++) {
    var currentElement = footballTeams[i];
    content += "<tr>";
    content += "<td>" + currentElement.name + "</td>";
    content += "<td>" + currentElement.city + "</td>";
    content += "<td>" + currentElement.points + "</td>";
    content += "</tr>";
}
tBody.innerHTML = content;
