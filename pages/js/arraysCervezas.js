const cervezas = [
  "Scottish",
  "Honey",
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

const listaKit = document.getElementById("listaKit");

const listaCarrito = document.getElementById("listaCarrito");

// titulo.innerText = "KIT DE INSUMOS";
// slogan.innerText = "Convertite en el mejor maestro cervecero";

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
  //   listaKit.innerHTML = "";
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
  const li = document.createElement("li");
  li.className = "kit insumo";
  li.innerText = kit;
  li.id = kit + "Carrito";
  li.addEventListener("click", () => {
    agregarAlCarrito(`${producto}`);
  });
  listaKit.append(li);
}
