// debugger;

// let edad = prompt("Ingrese su edad, por favor.");

// edad = parseInt(edad);

// // if (edad < 18) {
// //   console.error("Debe ser mayor de edad para ingresar. Lo sentimos");
// // } else if ((edad) => 18) {
// //   console.log("Bievenido a HOPFEN CRAFT BEER");
// // }

// edad >= 18
//   ? alert("Bienvenido a HOPFEN CRAFT BEER")
//   : (location.href = "ventana.html");

const mayorEdad = (mensaje, bgColor) => {
  Swal.fire({
    title: "SOY MAYOR DE 18 AÑOS",
    text: "BEBER CON MODERACIÓN",
    icon: "warning",
    confirmButtonText: "OK",
    background: bgColor || "#193028",
    color: "white",
  });
};

mayorEdad();

