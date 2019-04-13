function heredaDe(prototipoHijo, prototipoPadre){
	var fn = function () {}
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
}
function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido 
	this.altura = altura

}

Persona.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
	debugger
	return this.altura > 1.8
}

Persona.prototype.imprimirSiSoyAlto = function(){

	if (this.altura > 1.8) {
		console.log(`Yo, ${this.nombre} soy alto`) //Las funciones deben estar antes de la creación de los objetos
	}else{
		console.log(`Yo, ${this.nombre} no soy alto`)
	}
}

function Desarrollador (nombre, apellido) {
	this.nombre = nombre
	this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
	console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`)
}

var francisco = new Persona('Francisco', 'Castillo', 1.7)
var javi = new Persona('Javier', 'Castillo', 1.9)

francisco.saludar()
francisco.imprimirSiSoyAlto()
