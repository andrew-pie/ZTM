document.getElementsByTagName("h1");
document.getElementsByClassName("second")[0];
document.getElementById("first");

// Select first one
document.querySelector("h1");
// Select all
document.querySelectorAll("li");

document.querySelector("li").getAttribute("random");
document.querySelector("li").setAttribute("random", 1000);

// Change style methods
// ok
document.querySelector("h1").style.background = "yellow";

// best
var h1 = document.querySelector("h1");
h1.className = "collTitle";

// best
document.querySelector("li").classList.add("coolTitle");

// dangerous
document.querySelector("h1").innerHTML = "<strong>!!!!</strong>";

document.querySelectorAll("li")[1].parentElement.parentElement.children;

// It is important to CACHE selectors in variables
var h1 = document.querySelector("h1");