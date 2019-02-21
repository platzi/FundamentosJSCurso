const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = function (persona){
	console.log(`Hola soy ${persona.name}`)
}
function obtenerPersonaje(id) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	$.get(url, opts, onPeopleResponse)

}

for (var i = 1; i < 10; i++) {
	obtenerPersonaje(i)
}



