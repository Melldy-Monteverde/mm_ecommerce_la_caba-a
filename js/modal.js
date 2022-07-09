const btnCarrito = document.getElementById('btnCarrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementById('modal-content');
const modalCarrito = document.getElementsByClassName('modal-carrito');

btnCarrito.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active');
})

verCarrito.addEventListener('submit', (e) => {
    e.preventDefault();
})

carritoCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

modalCarrito.addEventListener('click', (e) => {
        e.stopPropagation();
})

contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})