// creo una constante para el contenedor de los productos
let carritoDeCompras = [];


const contenedorItems = document.getElementById('section__items');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const btnVaciar = document.getElementById('btnVaciarCarrito');

const btnTerminar = document.getElementById('terminar');
const precioTotal = document.getElementById('precioTotal');

mostrarArticulosAves();

function mostrarArticulosAves() {
    stockProductosAves.forEach(el => {
        let article = document.createElement('article');
        article.classList.add('items__gallery');
        article.innerHTML = `<img src="${el.img}" alt="${el.alt}">
                            <h5>${el.nombre}</h5>
                            <p>$${el.precio}</p>
                            <span>${el.aviso}</span>
                            <button id="btnA${el.id}" class="btn-agregar">Agregar al carrito</button>
                            <button id="btnB${el.id}" class="btn-borrar">Borrar del carrito</button>`;
        contenedorItems.appendChild(article);

        let btnAgregar = document.getElementById(`btnA${el.id}`);
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(el.id);
        })
        
        let btnBorrar = document.getElementById(`btnB${el.id}`);
        btnBorrar.addEventListener('click', () => {
            borrarDelCarrito(el.id);
        })
    })
}

// esta funcion debe ser para el app.js 

// agregar al carrito
function agregarAlCarrito(id) {
    let agregarProducto = stockProductosAves.find(item => item.id === id);
    carritoDeCompras.push(agregarProducto);
    mostrarCarrito(agregarProducto);
    actualizarCarrito();

    almacenarCarrito()
    
    console.log(carritoDeCompras)
}

function borrarDelCarrito(id) {
    let borrarProducto = stockProductosAves.find(item => item.id === id);
    let index = carritoDeCompras.indexOf(borrarProducto);
    carritoDeCompras.splice(index, 1);
    mostrarCarrito(borrarProducto);
    actualizarCarrito();

    console.log(carritoDeCompras)
}

// trabajar en esta funciona y los estilos para mostrar el modal del carrito
function mostrarCarrito(agregarProducto) {
    let div = document.createElement('div');
    div.setAttribute = ('class', 'productoEnCarrito');
    div.innerHTML = `
                    <p>${agregarProducto.nombre}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <button id="eliminar${agregarProducto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;
    contenedorCarrito.appendChild(div);

    let btnEliminiar = document.getElementById(`eliminar${agregarProducto.id}`);
    btnEliminiar.addEventListener('click', () => {
        btnEliminiar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== agregarProducto.id);
        actualizarCarrito()
        console.log(carritoDeCompras)
    
    })

}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length;
    let total = carritoDeCompras.reduce((acc, item) => acc + item.precio, 0);
    console.log(`El valor del carrito es: $${total}`)
}

// almaceno en localStorage
const almacenarCarrito = () => {
    localStorage.setItem('item', JSON.stringify(carritoDeCompras))
}

// recupero el localStorage para el carrito
const recuperarCarrito = () => {
    const productos = JSON.parse(localStorage.getItem('item'));
    // let item = '';
    for(prod of productos) {
        // aqui podria ir una lista del carrito por ahora veremos una tabla en consola
        console.table(prod)
        /*item += `<li>${producto}` </li>
        ul.innerHTML = item*/
    }
}

recuperarCarrito()

// puede mejorar ?
btnVaciar.addEventListener('click', (e) => {
    e.preventDefault();
    carritoDeCompras.length = 0;
    contadorCarrito.length = 0;
    actualizarCarrito()
})

