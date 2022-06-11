const iva = 10.5

class Producto {
	constructor (id, nombre, precio) {
		this.id = id
		this.nombre = nombre.toUpperCase()
		this.precio = parseFloat(precio)
	}
	
	sumaIva() {
		this.precio = this.precio + iva
	}
}

productos.push(new Producto("asado", "1.149,90"))
productos.push(new Producto("bife ancho", "1.049,90"))
productos.push(new Producto("bife angosto", "1.099,90"))

