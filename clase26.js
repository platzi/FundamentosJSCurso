class Persona{
	constructor(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido 
	this.altura = altura
	}
	saludar (fn) {
		var {nombre, apellido} = this
		console.log(`Hola, me llamo ${nombre} ${apellido}`)
		if (fn) {
			fn(nombre, apellido)
		}
	}
	soyAlto () {
		return this.altura > 1.8
	}
	imprimirSiSoyAlto () {
		if (this.altura > 1.8) {
		console.log(`Yo, ${this.nombre} soy alto`) //Las funciones deben estar antes de la creación de los objetos
		}else{
			console.log(`Yo, ${this.nombre} no soy alto`)
		}
	}

}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura){
		super(nombre, apellido, altura)
	}
	saludar (fn) {
		// var nombre = this.nombre
		// var apellido = this.apellido
		var {nombre, apellido} = this
		console.log(`Hola, me llamo ${nombre} y soy desarrollador`)
		if (fn) {
			fn(nombre, apellido, true)
		}
		
	}

}

function responderSaludo(nombre, apellido, esDev) {
	console.log(`Buen dia ${nombre} ${apellido}`)
	if (esDev) {
		console.log(`No sabia que eras Dev`)
	}
}
var francisco = new Persona('Francisco', 'Castillo', 1.7)
var javi = new Desarrollador('Javier', 'Castillo', 1.9)

francisco.saludar(responderSaludo)
javi.saludar(responderSaludo)

