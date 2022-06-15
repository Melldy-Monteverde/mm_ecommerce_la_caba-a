// declaro array vacio y moneda (usare luego)
let carrito = []
const moneda = "$"

// listar carrito | crear un boton que muestre el carrito
function listarCarro() {
    console.clear()
    console.table(carrito)
}

// listar productos de tienda
function listarProductos() {
    console.clear()
    console.table(productos)
}

// agregar al carrito y llamado a listar para ver tabla en consola | asociar con el boton comprar de cada producto
function agregaProducto() {
    let nuevoProducto = prompt("ingresa un producto").toLowerCase()

    if (nuevoProducto != undefined && nuevoProducto != null && nuevoProducto.trim() != "") {
        carrito.push(nuevoProducto)
        alert(`${nuevoProducto} agregado al carrito`)
        listarCarro()
    }
}

// llamo al afuncion 3 veces para simular una carga de productos y listar todos los prouctos del carrito(esto es solo para ver funcionalidad)
agregaProducto()


// borrar carrito, con validacion | crear boton de vaciar carrito
function vaciarCarrito() {
    // Limpiamos los productos guardados en el carrito
    let vaciar = confirm("quiere vaciar el carrito de compras?")

    if(vaciar != undefined && vaciar != null && vaciar != "") {
        carrito = []
        alert("el carrito esta vacio")
    }
}

// quitar 1 producto del carrito | crear boton de eliminar producto
function quitarProducto() {
    let eliminarProducto = prompt("cual producto quiere sacar del carrito?").toLowerCase()
    let index = carrito.indexOf(eliminarProducto)
        carrito.splice(index, 1)
        alert(`${eliminarProducto} se elimino del carrito`)
        listarCarro()
}

// calcular valor del carrito
function calcularMontoCarrito() {
    let total = productos.reduce( (valorPrevio, valorActual) => valorPrevio + valorActual.precio, 0)
    console.table(total)
    alert("el valor del carrito es")
}