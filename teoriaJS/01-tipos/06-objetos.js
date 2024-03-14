let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

// objeto literal  let personaje = {};
let personaje = {
    nombre: "Tanjiro",
    anime: "Demon slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['nombre']);

//modificar propiedad
personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;
 //eliminar propiedad
delete personaje.edad;
