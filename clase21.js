function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido 
	this.altura = altura

}

Persona.prototype.saludar = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){

	if (this.altura > 1.8) {
		console.log(`Yo, ${this.nombre} soy alto`)
	}else{
		console.log(`Yo, ${this.nombre} no soy alto`)
	}
}

var francisco = new Persona('Francisco', 'Castillo', 1.7)
var javi = new Persona('Javier', 'Castillo', 1.9)

francisco.saludar()
francisco.soyAlto()
javi.saludar()
javi.soyAlto()