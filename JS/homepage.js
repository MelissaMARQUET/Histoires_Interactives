/*Descriptif du DOM :
- le header est la première page avec une description du jeu
- la div homepage est la seconde page. Elle contient les liens vers
les histoires, ainsi que le footer copyright
*/
// Récupérer les 2 pages d'accueil et le bouton démarrer
let homepageHeader = document.getElementById("homepageHeader")
let startButton = document.getElementById("startButton")
let homepage = document.getElementById("homepage")
// Ne pas afficher la 2e page
homepage.style = "display: none;"
// Quand on clique sur démarrer, afficher la 2e page
startButton.addEventListener('click', function(event) {
    homepageHeader.style = "display: none;";
    homepage.style = "display: block;";
} )