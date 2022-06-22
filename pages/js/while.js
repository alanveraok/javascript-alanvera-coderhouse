  debugger;

  let cantidadLitros = true;

  while (cantidadLitros) {
    let litros = parseInt(prompt("Elija la cantidad de litros que desea"));
    if (litros <= 500) {
      cantidadLitros = true;
      console.log("Por favor, indique el tipo de cerveza");
    }
    if (litros > 500) {
      cantidadLitros = false;
      console.warn(
        "En caso de desear una compra de más de 500 litros, contáctese con nosotros"
      );
    }
  }


