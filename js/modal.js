const verCarrito = document.getElementById('btnCarrtio');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementById('modal-contenedor')[0];
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];

verCarrito.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active');
})

carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})

modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})

contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})