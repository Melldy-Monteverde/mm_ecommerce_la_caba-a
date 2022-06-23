// creo una constante para el contenedor de los productos
const contenedorItems = document.getElementById('section__items');
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

// esta funcion ebe ser para el app.js 

let carritoDeCompras = [];

// agregar al carrito
function agregarAlCarrito(id) {
    let agregarProducto = stockProductosAves.find(item => item.id === id);
    carritoDeCompras.push(agregarProducto);
    // console.table(agregarProducto);
    mostrarCarrito(agregarProducto);
}

function borrarDelCarrito(id) {
    let borrarProducto = stockProductosAves.find(item => item.id === id);
    let index = carritoDeCompras.indexOf(borrarProducto);
    // console.log(borrarProducto);
    carritoDeCompras.splice(index, 1);
}

// eliminar desde aqui si hace falta
function mostrarCarrito(agregarProducto) {
    let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${agregarProducto.nombre}</p>
                        <p>Precio: $${agregarProducto.precio}</p>
                        <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;

        contenedorItems.appendChild(div);
}


const contadorCarrito = document.getElementById('contadorCarrito');

function actualizarCarrito() {
}
