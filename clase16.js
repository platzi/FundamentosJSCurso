var signo = prompt('¿Cual es tu signo?')

signoFixed = signo.charAt(0).toUpperCase() + signo.substr(1, signo.length)
console.log(signoFixed)

switch (signoFixed) {
	case 'Acuario':
		console.log(`Hola ${signoFixed}`)
		break
	case 'Cancer':
		console.log(`Hola ${signoFixed}`)
		break
	case 'Capricornio':
		console.log(`Hola ${signoFixed}`)
		break
	case 'Geminis':
		console.log(`Hola ${signoFixed}`)
		break
	default:
		console.log('No es un signo valido')
		break
}