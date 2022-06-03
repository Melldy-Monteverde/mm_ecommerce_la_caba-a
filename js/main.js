alert("Hola usuario, esta pagina sigue en construccion!")
alert("Solo podras navegar y ver nuestros productos pero no podras realizar compras desde este sitio, podras dirigrte a nuestras sucursales o hacer pedido por tlf! Gracias por ser paciente!")

let username
let phone
let mail

debugger
function saludar() {
    mail = prompt("Ingresa tu direccion de email:")
    phone = parseInt(prompt("Ingresa tu numero de contacto:"))
    
    if ((mail == null) || (phone == null)){
        alert("no ingresaste tus datos de contacto y no podremos enviarte nuestras ofertas")
        alert("podras seguir navegando por nuestro sitio igualmente")
    } else {
        username = prompt("Ingresa tu nombre de usuario:")
        alert("hola " + username + " gracias por dejar tu info de contacto")
        alert("revisa nuestros productos y ve preparandote para el asado!")
    }
}

saludar()

