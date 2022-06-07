debugger;

let saludar = prompt("Ingrese su nombre");
console.log("Hola", saludar);

/*para calcular los litros de la compra*/

function calcularLitros() {
  debugger;
  let scottish = prompt(
    "Ingrese los litros de cerveza tipo Scottish VARON ROJO que desea:"
  );
  let honey = prompt(
    "Ingrese los litros de cerveza tipo Honey SWEET AGNES que desea:"
  );
  let creamAle = prompt(
    "Ingrese los litros de cerveza tipo Cream Ale SMETANA que desea:"
  );
  let ipa = prompt("Ingrese los litros de cerveza tipo IPA CLÁSICA que desea:");
  let porter = prompt(
    "Ingrese los litros de cerveza tipo Porter DARTH que desea:"
  );

  let resultado = sumaLitros(scottish, honey, creamAle, ipa, porter);
  console.log("Cantidad de litros a comprar:", resultado);
  console.log("Gracias por tu compra,", saludar);
}

function sumaLitros(scottish, honey, creamAle, ipa, porter) {
  return (
    parseInt(scottish) +
    parseInt(honey) +
    parseInt(creamAle) +
    parseInt(ipa) +
    parseInt(porter)
  );
}

calcularLitros();
