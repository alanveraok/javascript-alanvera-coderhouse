const stockCervezas = ["Scottish", "Honey", "Cream Ale", "IPA", "Porter"];

function Stock(nombre, ABV, IBU, importe) {
  this.nombre = nombre;
  this.ABV = parseFloat(ABV);
  this.IBU = parseInt(IBU);
  this.precio = parseInt(importe);
}

const stock1 = new Stock("Scottish", 4.5, 30, 4500);
const stock2 = new Stock("Honey", 6.5, 20, 5000);
const stock3 = new Stock("Cream Ale", 4.6, 22, 3200);
const stock4 = new Stock("IPA", 7.5, 44, 5500);
const stock5 = new Stock("Porter", 5.5, 40, 3000);

function buscarStock() {
  let busquedaStock = prompt("Ingrese el tipo de cerveza que desea buscar");
  debugger;
  let resultado = stockCervezas.find((stock) => stock.nombre === busquedaStock);
  console.table(resultado);
}

buscarStock();

function filtrarStock() {
  let aFiltrar = prompt("Ingrese el tipo de cerveza que deseas buscar");
  let resultado = stockCervezas.filter((stock) => stock.nombre(aFiltrar));
  console.table(resultado)
}

filtrarStock();

function sumarCarrito() {
  let total = carrito.reduce((acc, stockCervezas) => acc + cervezas.importe);
  console.log("Total de carrito", total);
}

sumarCarrito();
