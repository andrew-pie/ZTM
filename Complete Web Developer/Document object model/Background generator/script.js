var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function randomize() {
	color1.value = randomColors();
	color2.value = randomColors();
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";

	document.getElementById('p1').style.color = randomColors();
}


// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function randomColors() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);