var francisco = {
	nombre: 'Francisco',
	apellido: 'Castillo',
	edad: 19,
	peso: 60
}

console.log(`Al inicio del año ${francisco.nombre} pesa ${francisco.peso} kg`)

const INCREMENTO_PESO = 0.3
const META = francisco.peso - 3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const disminuirDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while(francisco.peso > META) {

	if (comeMucho()) {

		aumentarDePeso(francisco)
	}
	if (realizaDeporte()) {
		disminuirDePeso(francisco)
	}	

	dias += 1
}

console.log(` ${francisco.nombre} se tomo ${dias} en obtener el peso de ${francisco.peso.toFixed(1)} kg`)