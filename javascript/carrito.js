class Carrito {
    constructor() {
        this.productos = []
    }

    agregarItem(item) {
        this.productos.push(item)
    }

    get cantProductos() {
        return this.productos.length
    }

    get precioTotal() {
        /*if (!this.productos.length) {
            return 0
        }

        return this.productos.reduce(function(valorAnt, valorAct) { 
            return parseInt(valorAnt.precio) + parseInt(valorAct.precio)
         })*/
    }
}