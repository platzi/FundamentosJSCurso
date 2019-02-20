var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 130
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 200
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 130
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 12
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 170
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 100
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const pasarAlturaACms = persona =>({
             ...persona,
        altura: persona.altura * 100 //Cambia a centimetros

})

var personasCms = personas.map(pasarAlturaACms) //Modifica el array original

const reducer = (acum, {cantidadDeLibros}) => cantidadDeLibros + acum

var totalDeLibros = personas.reduce(reducer, 0) //Recibe la función y a cantidad inicial del acumulador
console.log(personasCms)
console.log(`La cantidad total de libros es ${totalDeLibros}`)