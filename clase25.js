class Persona{
	constructor(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido 
	this.altura = altura
	}
	saludar () {
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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
	saludar () {
		console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`)
	}

}

var francisco = new Persona('Francisco', 'Castillo', 1.7)
var javi = new Persona('Javier', 'Castillo', 1.9)

francisco.saludar()
francisco.imprimirSiSoyAlto()
