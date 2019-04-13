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

function imprimirSiEsMayorDeEdad(persona){
	if (persona.edad>=18) {
		console.log(`${persona.nombre} es mayor de edad`)
	}else{
		console.log(`${persona.nombre} no es mayor de edad`)
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