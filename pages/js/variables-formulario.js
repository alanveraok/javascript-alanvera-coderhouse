const inputNombre = document.querySelector("#inputNombre");
const inputDireccion = document.querySelector("#inputDireccion");
const inputCiudad = document.querySelector("#inputCiudad");

// let datosInput = "";

document.addEventListener("submit", (e) => {
  e.preventDefault();
  guardarDatos();
  // alert(`Compra realizada`);
  compraRealizada();
});

const datosInput = () => {
  guardarDatos() == ''
  faltaDato
}

function guardarDatos() {
  debugger;
  const datosUsuario = {
    nombre: inputNombre.value,
    ciudad: inputCiudad.value,
    telefono: inputTelefono.value,
  };
  let str = JSON.stringify(datosUsuario);
  localStorage.setItem(datosUsuario, datosUsuario);
}

function recuperarDatos() {
  if (localStorage.getItem(datosUsuario)) {
    const datosUsr = JSON.parse(localStorage.getItem("datosUsuario"));
    nombre: inputNombre.value;
    ciudad: inputCiudad.value;
    telefono: inputTelefono.value;
  }
}

recuperarDatos();
