// Entrada de campos, botones y guardo en const 
const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input") // obtengo los inputs para los eventos

const btnEnviar = document.getElementById("btnEnviar");
const bntBorrar = document.getElementById("btnBorrar");

const btnVaciar = document.getElementById('btnVaciarCarrito');
const contadorCarrito = document.getElementById('contadorCarrito');
let carritoDeCompras = [];

// Regex para validar campos
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos y hasta 40 caracteres.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// para confirmacion y envio
const campos = {
    nombre: false,
    telefono: false,
    correo: false,
}

// funcion para comprobar los campos que queremos validar a traves del name del input
// asi podemos comprobar contra las expresiones regulares
// se pintara de color verde para caracteres validos y rojo para invalidos en cada campo
// esto lo podriamos refactorizar y crear una funcion para que se ejecute y no repetir el condicinal en cada caso
const validarForm = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)) {
                document.getElementById('user_Name').classList.remove("form-incorrecto");
                document.getElementById('user_Name').classList.add("form-correcto");
                campos['user_Name'] = true
            } else {
                document.getElementById('user_Name').classList.add("form-incorrecto");
                document.getElementById('user_Name').classList.remove("form-correcto");
                campos['user_Name'] = false
            }
        break;
        case "telefono":
            if(expresiones.telefono.test(e.target.value)) {
                document.getElementById('user_Tel').classList.remove("form-incorrecto");
                document.getElementById('user_Tel').classList.add("form-correcto");
                campos['user_Tel'] = true
            } else {
                document.getElementById('user_Tel').classList.add("form-incorrecto");
                document.getElementById('user_Tel').classList.remove("form-correcto");
                campos['user_Tel'] = false
            }
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)) {
                document.getElementById('user_Email').classList.remove("form-incorrecto");
                document.getElementById('user_Email').classList.add("form-correcto");
                campos['user_Email'] = true
            } else {
                document.getElementById('user_Email').classList.add("form-incorrecto");
                document.getElementById('user_Email').classList.remove("form-correcto");
                campos['user_Email'] = false
            }       
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarForm);
    input.addEventListener("blur", validarForm);
})

// prevenir actualizacion del formulario
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })

function enviarForm () {
    form.reset();
    // se muestra cuando el formulario se envia
    form.lastElementChild.innerText = "Enviado con exito!";
    // sweetAlert();
    borrarPostEnvio()
}
enviarForm();

function borrarPostEnvio() {
    // borra el msj de exito y el color de los campos despues de enviar el formulairo
    setTimeout(() => {
        document.getElementById("msjEnviado").remove();
    }, 3000);

    setTimeout(() => {
        document.getElementById("user_Name").classList.remove("form-correcto");
    }, 3000);

    setTimeout(() => {
        document.getElementById("user_Tel").classList.remove("form-correcto");
    }, 3000);
    
    setTimeout(() => {
        document.getElementById("user_Email").classList.remove("form-correcto");
    }, 3000);

}

// avisos en botones enviar y borrar
btnEnviar.addEventListener('mousemove', () => {
    btnEnviar.title = "Haga click para enviar el formulario.";
})


bntBorrar.addEventListener('mousemove', () => {
    bntBorrar.title = 'Haga click para borrar el formulario.';
})

// sweet alert para formulario
// desactivado momentaneamente para poder manejar el formulario desde netlify
// const sweetAlert = () => {
//     Swal.fire({
//         title: 'Enviado!',
//         text: 'Gracias por contactarnos!',
//         icon: 'success',
//         confirmButtonText: 'continuar'
//       })
// }

// aqui use el operador ternario
btnVaciar.addEventListener('click', (e) => {
    e.preventDefault();
    const vaciarCarro = (carritoDeCompras.length === 0) ? sweetAlertVaciar() : carritoDeCompras.length = 0;
    contadorCarrito.length = 0;
    actualizarCarrito()
})

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length;
    let total = carritoDeCompras.reduce((acc, item) => acc + item.precio, 0);
    console.log(`El valor del carrito es: $${total}`)
}

// alerta de carrito cuando esta vacio y se prsiona el boton vaciar
const sweetAlertVaciar = () => {
    Swal.fire({
        title: 'Aviso!',
        text: 'El carrito esta vacio!',
        icon: 'info',
        confirmButtonText: 'continuar'
      })
}