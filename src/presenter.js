import {calcRomano} from "./calcRomano.js";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");

const form = document.querySelector("#calculador-form");
const num = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(num.value);

  div.innerHTML = "<p> Resultado: " + calcRomano(numero) + "</p>";
});
