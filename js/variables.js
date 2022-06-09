const ivaCarnes = 1.105
const ivaOtros = 1.21

const productos = []
const items = ["asado", "vaccio", "supremas", "chorizo", "morcilla", "milanesa de pollo", "bondiola", "pechito", "chinchulin"]
const cart = []

// esto aplicara para el DOM cuando se agregue un producto
function agregaAlCarrito() {
    console.clear()
    // debugger
    let nuevoProducto = prompt("ingresa un producto al carrito:")
        productos.push(agregaAlCarrito);
        alert(`${nuevoProducto} agregado al carrito`)
}

agregaAlCarrito()

// buscar producto por nombre, esto será para la barra de busqueda
function buscarProducto() {
    debugger
    let prod = prompt("qué producto quieres buscar?:")
        if (prod !== "") {
            let resultadoBusqueda = productos.find( p => p.nombre === prod.toLowerCase())
            alert(`si hay ${resultadoBusqueda}`)
        } else {
            alert(`no hay ${resultadoBusqueda}`)
        }

}

// quitar producto del carrito
function eliminarProducto() {
    console.log()
    let producto = promt("cual item quiere eliminar del carrito?")
    let indice = cart
}

// calcular valor del carrito
function valorCarrito() {
    debugger
    alert("el total del pedido es:")
    let total = cart.reduce( (acc, c) => acc + c.price, 0)
        alert(`toal ${total}`)
}

// 