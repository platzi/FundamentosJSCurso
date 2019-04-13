var francisco = {
	nombre: 'Francisco',
	apellido: 'Castillo',
	edad: 19
}
var javi = {
	nombre: 'Javier',
	apellido: 'Castillo',
	edad: 16
}

function imprimirNombreEnMayusculas({nombre}){ //solo se pide el atributo que se necesita
	console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(francisco)
imprimirNombreEnMayusculas(javi)
imprimirNombreEnMayusculas({nombre:'Pedro'})