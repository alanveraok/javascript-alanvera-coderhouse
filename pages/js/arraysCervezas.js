const cervezas = [
  "Scottish",
  "Amber",
  "Cream Ale",
  "IPA",
  "Porter",
  "American Pale Ale",
  "Golden",
  "Stout",
  "Dorada Pampeana",
];

const carrito = [];

const titulo = document.getElementById("titulo");
const slogan = document.getElementById("slogan");

titulo.innerText = "KIT DE INSUMOS";
slogan.innerText = "Convertirte en el mejor maestro cervecero";

const listaKit = document.getElementById("listaKit");
const listaCarrito = document.getElementById("listaCarrito");

// function cargarKits() {
//   debugger;
//   listaKit.innerHTML = "";
//   for (cerveza of cervezas) {
//     listaKit.innerHTML += "<li class = kit-insumo>" + cerveza + "</li>";
//   }
// }

//     const li = document.createElement("li");
//     li.className = "kit-insumo";
//     li.innerText = cerveza;
//     li.id = cerveza + "Kit";
//     li.addEventListener
//     listaKit.append(li)//   }

// cargarKits()

function cargarKits() {
  debugger;
  listaKit.innerHTML = "";
  for (const cerveza of cervezas) {
    const li = document.createElement("li");
    li.className = "kit-insumo";
    li.innerText = cerveza;
    li.id = cerveza + "Kit";
    li.addEventListener("click", () => {
      agregarAlCarrito(`${cerveza}`);
    });
    listaKit.append(li);
  }
}

cargarKits();

function agregarAlCarrito(kit) {
  carrito.push(kit);
  aplicarCarrito();
  const li = document.createElement("li");
  li.className = "kit-insumo";
  li.innerText = kit;
  li.id = kit + "Carrito";
  li.addEventListener("click", () => {
    agregarAlCarrito(`${cerveza}`);
  });
  listaCarrito.append(li);
}

function aplicarCarrito() {
  if (carrito.lenght > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
}

function mostrarCarrito() {
  if (localStorage.getItem(datosUsuario)) {
    const datosUsuario = JSON.parse(localStorage.getItem(datosUsuario));
    nombre: inputNombre.value;
    ciudad: inputCiudad.value;
    telefono: inputTelefono.value;
  }

  let carrito = JSO.parse(localStorage.getItem(carrito));
}

mostrarCarrito();

carrito.length === 0 &&
  console.warn("Por favor, añada kit deseado a su carrito.");

