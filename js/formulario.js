// Entrada de campos, botones y guardo en const 
const formulario = document.getElementById("form");
const nombre = document.getElementById("userName");
const apellido = document.getElementById("userLastName");
const correo = document.getElementById("userEmail");
const mensaje = document.getElementById("comentarios");
const btnEnviar = document.getElementById("btnEnviar");
const bntBorrar = document.getElementById("btnBorrar");

// prevenir actualizacion del formulario y validaciones
const listInputs = document.querySelectorAll(".form-input");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})

// boton enviar y borrar
btnEnviar.addEventListener('mousemove', () => {
    btnEnviar.title = "Haga click para enviar el formulario.";
})

bntBorrar.addEventListener('mousemove', () => {
    bntBorrar.title = 'Haga click para borrar el formulario.';
})