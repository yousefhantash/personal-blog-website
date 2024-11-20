/* I am using a simple javaScript code to address the menu bar, 
this code enables a dropdown menu effect where the user can click 
the menu icon to display and hide the navigation links 
  */

let menuBar = document.getElementById("menu-bar");
let menu = document.querySelector(".nav-bar-links");

menuBar.onclick = function() {
    menuBar.classList.toggle("fa-times");
    menu.classList.toggle("active");
}