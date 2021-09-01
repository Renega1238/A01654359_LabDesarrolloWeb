var alumno = {name:"Rene", age:23}

//console.log(alumno);

let lastName = "Aviles";

//console.log(alumno.name);
//console.log(lastName);

// Para agregar el apellido a alumno 
var alumnos = [{...alumno, lastName}];
// Lo que hicimos arriba fue clonar el arreglo y agregarlo a la izquierda
console.log(alumnos);

// Agregar uno nuevo
alumnos[1] = {name:"Juan", age:33, lastName:"Garcia"}

console.log(alumnos);