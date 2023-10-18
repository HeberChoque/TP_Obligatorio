function cargarProductos() {
    var productos = JSON.parse(productosJSON)
    var menus = document.getElementsByClassName("menu-section")
    
    var submenus = Object.keys(menus)
    var categorias = Object.keys(productos)

    for (let i = 0; i < submenus.length; i++) {
        items = productos[categorias[i]].map(aplicarFormato)

        menus[submenus[i]].innerHTML = items.toString().replace(/,/g," ")
    }
}

function aplicarFormato(producto) {
    return `
    <div class="menu-item">
        <img class="item-icon" src="imagenes/`+ producto.img +`" alt=\"`+ producto.titulo +`\">
        <div class="item-info">
            <div class="item-title">`+ producto.titulo +`</div>
            <div class="item-ingredients">
                <span> `+ producto.descripcion +` </span>
            </div>
            <div class="item-footer">
                <span class="item-price">Precio: $`+ producto.precio +`</span>
                <button class="add-order" type="button" id=\"`+ producto.id +`\">Agregar</button>
            </div>
        </div>
    </div>`
}

cargarProductos()