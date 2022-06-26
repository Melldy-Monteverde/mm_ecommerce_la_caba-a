const verCarrito = document.getElementById('btnCarrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementById('modal-contenedor');
const modalCarrito = document.getElementsByClassName('modal-carrito');

verCarrito.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active');
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