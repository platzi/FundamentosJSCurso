var contador = 0

const llueve = () => Math.random() < 0.25

do {
	contador ++
} while(!llueve())

if (contador === 1) {
	console.log(`Fue a ver si llovia ${contador} vez`)
}else{
	console.log(`Fue a ver si llovia ${contador} veces`)
}
