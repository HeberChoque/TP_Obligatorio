var botonesProductos = document.getElementsByTagName("button")

for (var pedido of botonesProductos) {
    pedido.addEventListener("click", agregarProducto, false)
}

function agregarProducto() {
    alert("Producto agregado correctamente: "+ this.id)
}