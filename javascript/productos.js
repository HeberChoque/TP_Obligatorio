/* Posibles ID para diferenciar categorias de productos:
    
    * Agregar prefijo al ID para diferenciar la categoria al que pertenece al producto
    - "id": "h001"      // para hamburguesas (DB)
    - "id": "b001"      // para bebidas (DB)
    - "id": "p001"      // para acompañar (DB)

    * Dejar tal como esta, pero al implementarlo en la pagina, agregar el prefijo al
      ID del button, para poder diferenciar los productos al momentor de agregarlo al carrito
      y no se superpongan los datos

    ... type="button" id=\"`+ producto.id +`\"      // antes

    ... type="button" id=\"`+ producto.prefix + producto.id +`\"     // para hamburguesas (prefix = h)
    ... type="button" id=\"`+ producto.prefix + producto.id +`\"     // para bebidas (prefix = b)

    * Buscar otra manera de guardar los productos en la base de datos

*/

var productosJSON = `{
    "hamburguesas": [
        {
            "id": "001",
            "titulo": "Cangreburguer",
            "descripcion": "- Tomate - Cebolla morada - Lechuga - Cheddar - Medallon de cangrejo",
            "precio": 3950,
            "img": "cangreburguer.png"
        },
        {
            "id": "002",
            "titulo": "Hamburguesa",
            "descripcion": "- Medallones x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2",
            "precio": 2500,
            "img": "burger.png"
        },
        {
            "id": "003",
            "titulo": "Hamburguesa",
            "descripcion": "- Medallones x2 - Lechuga - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2",
            "precio": 3000,
            "img": "burger.png"
        },
        {
            "id": "004",
            "titulo": "Hamburguesa",
            "descripcion": "- Medallones x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga",
            "precio": 4200,
            "img": "burger.png"
        },
        {
            "id": "005",
            "titulo": "BigMc",
            "descripcion": "- Medallones x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga",
            "precio": 9000,
            "img": "burger.png"
        },
        {
            "id": "009",
            "titulo": "PaPUS Burger",
            "descripcion": "- Carne",
            "precio": 2000,
            "img": "burger.png"
        }
    ],
    "bebidas": [
        {
            "id": "006",
            "titulo": "Coca-Cola 1.5L",
            "descripcion": "",
            "precio": 1100,
            "img": "cocacola.jpg"
        },
        {
            "id": "007",
            "titulo": "Sprite 2.25L",
            "descripcion": "",
            "precio": 1500,
            "img": "sprite.jpg"
        },
        {
            "id": "010",
            "titulo": "Manaos 2.25L",
            "descripcion": "",
            "precio": 1250,
            "img": "manaos.jpg"
        },
        {
            "id": "008",
            "titulo": "La Bichi",
            "descripcion": "",
            "precio": 800,
            "img": "bichi.jpg"
        }
    ]
}`

/* VARIABLES ACTUALMENTE EN DESUSO */

var hamburguesasJSON = `[
    {
        "id": "001",
        "titulo": "Cangreburguer",
        "descripcion": "- Tomate - Cebolla morada - Lechuga - Cheddar - Medallon de cangrejo",
        "precio": 3950,
        "img": "cangreburguer.png"
    },
    {
        "id": "002",
        "titulo": "Hamburguesa",
        "descripcion": "- Medallones x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2",
        "precio": 2500,
        "img": "burger.png"
    },
    {
        "id": "003",
        "titulo": "Hamburguesa",
        "descripcion": "- Medallones x2 - Lechuga - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2",
        "precio": 3000,
        "img": "burger.png"
    },
    {
        "id": "004",
        "titulo": "Hamburguesa",
        "descripcion": "- Medallones x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga - Tomate - Cebolla morada - Cheddar - Huevo - Bacon x2 - Lechuga",
        "precio": 4200,
        "img": "burger.png"
    }
]`

var bebidasJSON = `[
    {
        "id": "005",
        "titulo": "Coca-Cola 1.5L",
        "descripcion": "",
        "precio": 1100,
        "img": "cocacola.png"
    },
    {
        "id": "006",
        "titulo": "Sprite 2.25L",
        "descripcion": "",
        "precio": 1500,
        "img": "sprite.png"
    },
    {
        "id": "007",
        "titulo": "Manaos 2.25L",
        "descripcion": "",
        "precio": 1250,
        "img": "manaos.png"
    }
]`


