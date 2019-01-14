var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizer = document.getElementById("randomizer");

function generateRandom(){
  return ("#" + Math.random().toString(16).slice(2, 8));
}

function generateColor(){
	color1.value = generateRandom();
	color2.value = generateRandom();
	setGradient();
}

window.onload = setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizer.addEventListener("click", generateColor);