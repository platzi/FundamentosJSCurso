var x = 4, y = '4'


var francisco = {
	nombre: 'Francisco'
}

var otraPersona = {
	...francisco //arroja false porque es un nuevo objeto
}
var otraPersona = francisco //arroja true pero si se modifica otraPersona tambien se modifica francisco
