const contenedorItems = document.getElementById('section__items');
mostrarArticulosEmbutidos();

function mostrarArticulosEmbutidos() {
    stockProductosEmbutidos.forEach(el => {
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