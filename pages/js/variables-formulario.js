const inputNombre = document.querySelector("#inputNombre");
const inputDireccion = document.querySelector("#inputDireccion");
const inputCiudad = document.querySelector("#inputCiudad");

inputNombre.addEventListener("input", () => {
  console.log(inputNombre.value);
});

inputDireccion.addEventListener("input", () => {
  console.log(inputDireccion.value);
});

inputCiudad.addEventListener("input", () => {
  console.log(inputCiudad.value);
});


