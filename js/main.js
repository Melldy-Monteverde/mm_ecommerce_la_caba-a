alert("Hola usuario, esta pagina sigue en construccion!")
alert("Solo podras navegar y ver nuestros productos pero no podras realizar compras desde este sitio, podras dirigrte a nuestras sucursales o hacer pedido por tlf! Gracias por ser paciente!")

let username
let phone
let mail

debugger
function saludar() {
    username = prompt("Ingresa tu nombre:")
    
    if (username == null) {
        alert("no ingresaste tu nombre")
    } else {
        mail = prompt("ingresa tu mail:")
        phone = parseInt(prompt("ingresa tu cel:"))
        alert("hola " + username + " gracias por dejar tu info de contacto")
    }
}

saludar()

