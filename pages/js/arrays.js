const cervezas = ["Scottish", "Honey", "Cream Ale", "IPA", "Porter"];

function listaCerveza() {
  debugger;
  console.clear;
  console.table(cervezas);
}

listaCerveza();

const cervezaPalida = ["Honey", "Cream Ale", "IPA"];
const cervezaOscura = ["Scottish", "Porter"];

function clasificarPalidas() {
  debugger;
  console.table(cervezaPalida);
}

clasificarPalidas();

function clasificarOscuras() {
  debugger;
  console.table(cervezaOscura);
}

clasificarOscuras();

/*para agregar o quitar stock*/

// const proximoStock = ["Dorada"];
// debugger;

// function agregarStock() {
//   debugger;
//   let nuevoStock = proximoStock;
//   cervezas.push(nuevoStock);
//   console.table(cervezas);
// }
// agregarStock();

function agregarStock() {
  debugger;
  let nuevoStock = prompt(
    "Ingrese nuevo stock de cerveza"
  ); /*APA, por ejemplo*/
  cervezas.push(nuevoStock);
  console.table(cervezas);
}

agregarStock();

function quitarStock() {
  debugger;
  let quitarStock = prompt(
    "Ingrese el stock que desea quitar:"
  ); /*Honey, porque indice 1*/
  cervezas.splice(1, 1);
  console.table(cervezas);
}

quitarStock();

function buscarCerveza() {
  debugger;
  let busqueda = prompt("Ingrese el tipo de cerveza que desea buscar:");
  let resultado = cervezas.includes(busqueda);
  if (resultado) {
    console.log("La cerveza se encuentra en stock");
  } else {
    console.warn(
      "Lo sentimos, la cerveza no se encuentra en stock y/o producción"
    );
  }
}

buscarCerveza();
