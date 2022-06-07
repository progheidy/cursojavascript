// Objetos

// Object Literal
const persona = {
 nombre: 'Heidy',
 profesion: 'Desarrollador web',
 edad: 500,
}

// const mostrarCliente = mostrarInformaciónTarea(persona, nombre, persona, profesion)
//console.log(mostrarCliente);

// Object Constructor
function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.nombre = urgencia
}
//Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
 return `La tarea ${this.tarea} tiene una prioridad de $ {this.urgencia}
    `
}

// crear una nueva tarea:
// crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente')
const tarea2 = new Tarea('Pasear al perro', 'Urgente')
console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea())
console.log(tarea2)
console.log(tarea2.mostrarInformacionTarea())
