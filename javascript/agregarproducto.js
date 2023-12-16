
//var botonesProductos = document.getElementsByTagName("button")
var botonesProductos = document.getElementsByClassName("add-item")
var barraPedido =  document.getElementById("carrito")
var infoPedidoHTML = barraPedido.firstElementChild.children

var productos = JSON.parse(productosJSON)
var carrito = new Carrito()

for (var pedido of botonesProductos) {
    pedido.addEventListener("click", buscarProducto, false)
}

/* Funcion llamada desde el evento addEventListener
    - this:
        Es la manera de obtener el objeto que fue clickeado, segun definimos en el evento addEventListener
        En este caso el objeto es un boton perteneciente a la clase add-item
        Todos los objetos capturados en esta funcion son elementos HTML, y sus metodos corresponden a las propiedades de la etiqueta que fue capturada
    
    - this.id:
        Del objeto capturado en el evento addEventListener, obtenemos su ID
        Este ID lo comparamos con los ID's de la lista de productos que estan en el archivo JSON
        En caso de que alguno coincida, se invoca la funcion agregarProductos y se le envia el item encontrado
        Caso contrario no hara nada (SUJETO A CAMBIOS)
*/
function buscarProducto() {
    var item
    for (let categoria in productos) {
        if(item = productos[categoria].find((prod) => prod.id == this.id)){
            agregarProducto(item)
            modificarBarraPedido()
        }
    }
}


/*
    funcion agregarProducto(item)

    Se encarga de agregar el item al carrito
    Tambien se encarga de mostrar la barra de pedidos, si es que estaba oculta antes
 */
function agregarProducto(item) {
    carrito.agregarItem(item)
}

function modificarBarraPedido() {
    if (barraPedido.style.visibility != "visible") {
        barraPedido.style.visibility = "visible"
    }
    
    console.log("Productos: "+carrito.cantProductos)
    console.log("TOTAL: "+carrito.precioTotal)

    //infoPedidoHTML[0].textContent = carrito.cantProductos + " productos"
    //infoPedidoHTML[1].textContent = "$ " + carrito.precioTotal
}