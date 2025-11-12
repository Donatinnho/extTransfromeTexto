window.document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#entrada").value;
      document.querySelector("#resultado").innerHTML = inputText.toUpperCase();
    });
});

window.document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#entrada").value;
      document.querySelector("#resultado").innerHTML = inputText.toLowerCase();
    });
});
