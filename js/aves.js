// creo una constante para el contenedor de los productos
let carritoDeCompras = [];

const contenedorItems = document.getElementById('section__items');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const btnVaciar = document.getElementById('btnVaciarCarrito');
const btnCarrito = document.getElementById('btnCarrito');

const btnTerminar = document.getElementById('terminar');
const precioTotal = document.getElementById('precioTotal');

// aqui consumimos la api local en formato json
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('../api.json');
        const data = await res.json();

        mostrarProductos(data)
    } catch(error) {
        console.log(error)
    }
}
// esta funcion reemplaza a mostrarArticulosAves(), consume la api y muestra la plantilla
const mostrarProductos = data => {
    data.forEach(el => {
        let article = document.createElement('article');
        article.classList.add('items__gallery');
        article.innerHTML = `
                            <img src="${el.img}" alt="${el.alt}">
                            <h5>${el.nombre}</h5>
                            <p>$${el.precio}</p>
                            <span>${el.aviso}</span>
                            <button id="btnA${el.id}" class="btn-agregar">Agregar al carrito</button>
                            <button id="btnB${el.id}" class="btn-borrar">Borrar del carrito</button>
                            `;
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

// esta era la funcion original que consumia el stock.js

// function mostrarArticulosAves() {
//     stockProductosAves.forEach(el => {
//         let article = document.createElement('article');
//         article.classList.add('items__gallery');
//         article.innerHTML = `
//                             <img src="${el.img}" alt="${el.alt}">
//                             <h5>${el.nombre}</h5>
//                             <p>$${el.precio}</p>
//                             <span>${el.aviso}</span>
//                             <button id="btnA${el.id}" class="btn-agregar">Agregar al carrito</button>
//                             <button id="btnB${el.id}" class="btn-borrar">Borrar del carrito</button>
//                             `;
//         contenedorItems.appendChild(article);

//         let btnAgregar = document.getElementById(`btnA${el.id}`);
//         btnAgregar.addEventListener('click', () => {
//             agregarAlCarrito(el.id);
//         })
        
//         let btnBorrar = document.getElementById(`btnB${el.id}`);
//         btnBorrar.addEventListener('click', () => {
//             borrarDelCarrito(el.id);
//         })
//     })
// }

// agregar al carrito
function agregarAlCarrito(id) {
    let agregarProducto = stockProductosAves.find(item => item.id === id);
    carritoDeCompras.push(agregarProducto);
    mostrarCarrito(agregarProducto);
    actualizarCarrito();

    almacenarCarrito();
    
    console.log(carritoDeCompras)
}

function borrarDelCarrito(id) {
    let borrarProducto = stockProductosAves.find(item => item.id === id);
    let index = carritoDeCompras.indexOf(borrarProducto);
    carritoDeCompras.splice(index, 1);
    
    const carritoMenosUno = (carritoDeCompras.length === 0) ? sweetAlertVaciar() : carritoDeCompras.length - 1;
    contadorCarrito.length - 1;
    
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

// prevenir refresh del boton carrito
btnCarrito.addEventListener ('click', (e) => {
    e.preventDefault();
})

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length;
    let total = carritoDeCompras.reduce((acc, item) => acc + item.precio, 0);
    console.log(`El valor del carrito es: $${total}`)
}

// aqui use el operador ternario
btnVaciar.addEventListener('click', (e) => {
    e.preventDefault();
    const vaciarCarro = (carritoDeCompras.length === 0) ? sweetAlertVaciar() : carritoDeCompras.length = 0;
    contadorCarrito.length = 0;
    actualizarCarrito()
})

// alerta de carrito cuando esta vacio y se prsiona el boton vaciar
const sweetAlertVaciar = () => {
    Swal.fire({
        title: 'Aviso!',
        text: 'El carrito esta vacio!',
        icon: 'info',
        confirmButtonText: 'continuar'
      })
}

// almaceno en localStorage
const almacenarCarrito = () => {
    localStorage.setItem('productoEnCarrito', JSON.stringify(carritoDeCompras));
}

const recuperarCarrito = () => {
    const carritoEnLS = JSON.parse(localStorage.getItem('productoEnCarrito'));

    if (carritoEnLS) {
        carrito = carritoEnLS;
        console.log(carritoDeCompras);
    }
}

