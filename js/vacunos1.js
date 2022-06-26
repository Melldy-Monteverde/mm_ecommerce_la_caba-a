// creo una constante para el contenedor de los productos
const contenedorItems = document.getElementById('section__items');
mostrarArticulosVacunos1();

function mostrarArticulosVacunos1() {
    stockProductosVacunos1.forEach(el => {
        let article = document.createElement('article');
        article.classList.add('items__gallery');
        article.innerHTML = `<img src="${el.img}" alt="${el.alt}">
                            <h5>${el.nombre}</h5>
                            <p>$${el.precio}</p>
                            <span>${el.aviso}</span>
                            <button id="btnA${el.id}" class="btn-agregar">Agregar al carrito</button>
                            `;
                            // <button id="btnB${el.id}" class="btn-borrar">Borrar del carrito</button>
        contenedorItems.appendChild(article);

        let btnAgregar = document.getElementById(`btnA${el.id}`);
        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(el.id);
            // actualizarCarrito()
        })
        
        // let btnBorrar = document.getElementById(`btnB${el.id}`);
        // btnBorrar.addEventListener('click', () => {
        //     borrarDelCarrito(el.id);
        // })
    })
}

let carritoDeCompras = [];

function agregarAlCarrito(id) {
    let agregarProducto = stockProductosVacunos1.find(item => item.id === id);
    carritoDeCompras.push(agregarProducto);
    actualizarCarrito();
    console.log(carritoDeCompras)
}

function borrarDelCarrito(id) {
    let borrarProducto = stockProductosAves.find(item => item.id === id);
    let index = carritoDeCompras.indexOf(borrarProducto);
    carritoDeCompras.splice(index, 1);
    actualizarCarrito();
    console.log(carritoDeCompras)
}


const contenedorCarrito = document.getElementById('carrito-contenedor')

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carritoDeCompras.forEach((el) => {
        let div = document.createElement('div');
        div.setAttribute = ('class','productoEnCarrito');
        div.innerHTML = `
                        <p>${el.nombre}</p>
                        <p>Precio: $${el.precio}</p>
                        <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`;
    
    contenedorCarrito.appendChild(div);
    
    })

}