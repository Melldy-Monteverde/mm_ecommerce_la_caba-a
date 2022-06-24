// constructor de objetos para lista de productos
class Producto {
    constructor(nombre, precio, cantidadPeso) {
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.cantidadPeso = cantidadPeso
    }
}

// listado de prodcutos
const productos = []

// funcion para cargar el array de productos, no el carrito
function poblarProductos() {
    productos.push(new Producto("asado", 99.90, 1))
    productos.push(new Producto("vacio", 119.90, 1))
    productos.push(new Producto("pechito", 79.90, 1))
    productos.push(new Producto("pollo", 79.90, 1))
    productos.push(new Producto("morcilla", 19.90, 1))
    productos.push(new Producto("milanesa de pollo", 89.90, 1))
    productos.push(new Producto("milanesa de carne", 89.90, 1))
    productos.push(new Producto("bondiola", 89.90, 1))

    console.table(productos)
}

poblarProductos()


//buscar producto en la pagina()
function buscarProducto() {
    let aBuscar = prompt("que producto buscas?").toLowerCase()
        if (aBuscar != undefined && aBuscar != null && aBuscar.trim != "") {
            
            let resultado = productos.find(p => p.nombre.toLowerCase() === aBuscar.toLowerCase())
            console.table(resultado)
        } else {
            alert("No existe ese producto en nuestra tienda")
        }
}

// filtrar por producto en la pagina
function filtrarProducto() {
    let prod = prompt("filtrar por parte del nombre o nombre:")
        if (prod != undefined) {
            
            let filtrado = carrito.filter(f => f.nombre.includes(prod.toLowerCase()))
            console.table(filtrado)
        } else {
        alert("producto inexistente")
    }
}


