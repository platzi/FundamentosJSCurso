var francisco = {
	nombre: 'Francisco',
	apellido: 'Castillo',
	edad: 19,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	cm: true
}
var juan = {
	nombre: "Juan",
	apellido: "Gomez",
	edad: 14
}

const MAYORIA_DE_EDAD = 18 //Las constantes deben nombrarse en mayusculas siempre

function esMayorDeEdad(persona){
	if (persona.edad >= MAYORIA_DE_EDAD) {
		return persona.edad >= MAYORIA_DE_EDAD
	}
}
function imprimirSiEsMayorDeEdad(persona){
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	}else{
		console.log(`${persona.nombre} es menor de edad`)
	}
}

function imprimirProfesiones(persona){
	console.log(`${persona.nombre} es: `)
	if (persona.ingeniero) {
		console.log('Ingeniero')
	}else{
		console.log('No es ingeniero')
	}
	if (persona.cocinero) {
		console.log('cocinero')
	}else{
		console.log('No es cocinero')
	}
	if (persona.dj) {
		console.log('dj')
	}
	if (persona.cantante) {
		console.log('cantante')
	}
	if (persona.cm) {
		console.log('cm')
	}
}

imprimirProfesiones(francisco)
imprimirSiEsMayorDeEdad(francisco)