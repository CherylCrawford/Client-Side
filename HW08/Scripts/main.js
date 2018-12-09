// main.js
// student: Sherrie Teague
// date: 11/27/2018
// class: Client-Side Programming
// assignment: HW08 Pulling It All Together


/*Use an images array to store the images for the cards used
by a game.*/

/*Use a cards array to store the src attributes of the images
for the cards that will be displayed on the board (two for
    each image).*/
var cardsArray = [

];


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    // turning tabs off
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    // turning on tab that is selected
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
};