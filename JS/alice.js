/*Descriptif du DOM :
- Le header est la page descriptive de l'histoire
- Le main contient toutes les pages de l'histoire,
qui sont chacune contenue dans des sections. 
___Il y a :
_____#start : qui correspond au début de l'histoire
_____.chapitre : page avec titre du chapitre
_____.main-character-section : page où le personnage
principal parle ou pense 
_____.histoire : page de narration
_____.other-character-section : page où un 
autre personnage parle
- Le footer est la page de fin

Les pages apparaissent une par une selon le 
déroulé de l'histoire.
*/
/*
Récupérer les éléments et les placer
dans des variables
*/
// Bouton play
let playButton = document.getElementById("playButton")
// Header de l'histoire
let storyHeader = document.getElementById("storyHeader")
// Début de l'histoire
let start = document.getElementById("start")
// Sections
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
// Footer
let footer = document.getElementById("footer")
/*
Ne pas afficher les éléments
*/
start.style = 
section1.style = 
section2.style = 
section3.style = 
section4.style =
section5.style =
footer.style =
"display: none;"
/*
Lorsque l'on clique sur play, faire apparaître
l'histoire, et disparaître le header
*/
playButton.addEventListener('click', function(event) {
    storyHeader.style = "display: none;";
    start.style = "display: block;";
} )
start.addEventListener('click', function(event) {
    start.style = "display: none;";
    section1.style = "display: block;";
} )
section1.addEventListener('click', function(event) {
    section1.style = "display: none;";
    section2.style = "display: block;";
} )
section2.addEventListener('click', function(event) {
    section2.style = "display: none;";
    section3.style = "display: block;";
} )
section3.addEventListener('click', function(event) {
    section3.style = "display: none;";
    section4.style = "display: block;";
} )
section4.addEventListener('click', function(event) {
    section4.style = "display: none;";
    section5.style = "display: block;";
} )