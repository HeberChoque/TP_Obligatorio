
var botonesProductos = document.getElementsByTagName("button")

var productos = JSON.parse(productosJSON)

for (var pedido of botonesProductos) {
    pedido.addEventListener("click", agregarProducto, false)
}


function agregarProducto() {
    var item
    for (let categoria in productos) {
        if(item = productos[categoria].find((prod) => prod.id == this.id)){
            alert("Pedido: " + item.titulo + " - $" + item.precio)   
        }
    }
}