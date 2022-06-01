debugger;

let tipoCerveza = prompt("Consulte por su tipo de cerveza");

switch (tipoCerveza) {
  case "scottish":
    console.log("Contamos con hasta 500 litros de", tipoCerveza);
    break;

  case "honey":
    console.log("Contamos con hasta 200 litros de", tipoCerveza);
    break;

  case "porter":
    console.log("Contamos con hasta 200 litros de", tipoCerveza);
    break;

  case "IPA":
    console.log("Contamos con hasta 80 litros de", tipoCerveza);
    break;

  default:
    console.warn("Cerveza sin stock o fuera de producción");
    break;
}
