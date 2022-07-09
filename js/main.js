const btnVaciar = document.getElementById('btnVaciarCarrito');
let carritoDeCompras = [];

Swal.fire({
    title: 'Aviso',
    text: 'Hola usuario, esta pagina sigue en construccion! Solo podras navegar y ver nuestros productos pero no podras realizar compras desde este sitio, podras dirigrte a nuestras sucursales o hacer pedido por tlf! Gracias por ser paciente!',
    icon: 'info',
    confirmButtonText: 'Seguir navegando'
  })

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