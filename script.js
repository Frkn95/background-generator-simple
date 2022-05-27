const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.querySelector(".rdmBtn");

function startGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function randomGradient() {
  let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color1.value = randomColor1;
  color2.value = randomColor2;

  setGradient();
}

document.addEventListener("DOMContentLoaded", startGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomGradient);
