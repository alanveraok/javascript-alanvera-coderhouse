
class Cervezas {
    constructor(nombre, ABV, IBU, importe){
        this.nombre = nombre
        this.ABV = parseFloat(ABV)
        this.IBU = parseInt(IBU)
        this.importe = parseInt(importe)
    }
}

const productos = []
const carrito = []
