var francisco = {
	nombre: 'Francisco',
	apellido: 'Castillo',
	edad: 19,
	peso: 60
}

console.log(`Al inicio del año ${francisco.nombre} pesa ${francisco.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const disminuirDePeso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
	var random = Math.random()

	if (random < 0.25) {

		aumentarDePeso(francisco)

	} else if (random < 0.5) {

		disminuirDePeso(francisco)

	}
}

console.log(`Al final del año ${francisco.nombre} pesa ${francisco.peso.toFixed(1)} kg`)