// declaro array vacio (usare luego)
// const carro = [];

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
// function quitarProducto() {
//     let eliminarProducto = prompt("cual producto quiere sacar del carrito?").toLowerCase()
//     let index = carrito.indexOf(eliminarProducto)
//         carrito.splice(index, 1)
//         alert(`${eliminarProducto} se elimino del carrito`)
//         listarCarro()
// }

