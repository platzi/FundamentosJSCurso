const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		$
			.get(url, opts, function (data) {
				resolve(data)
			})
			.fail(() => reject(id))
		})
	}
function onError(id){
	console.log(`Sucedio un error al obtener el personaje ${personaje.id}`)
}

obtenerPersonaje(1)
	.then(personaje1 => {
		console.log(`El personaje 1 es ${personaje1.name}`)
		return obtenerPersonaje(2)
	})
	.then(personaje2 => {
		console.log(`El personaje 2 es ${personaje2.name}`)
		return obtenerPersonaje(3)
	})
	.then(personaje3 => {
		console.log(`El personaje 3 es ${personaje3.name}`)
	})
	.catch(onError)