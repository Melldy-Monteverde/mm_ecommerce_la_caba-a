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
                            <button class="btn-agregar">Agregar al carrito</button>
                            <button class="btn-borrar">Borrar del carrito</button>`;
        contenedorItems.appendChild(article);
    })
}

