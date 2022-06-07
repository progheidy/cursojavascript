class ComprasPendientes extends Tarea {
 constructor(nombre, prioridad) {
  this.nombre = nombre
  this.prioridad = prioridad
 }
 mostrar() {
  console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
 }
 hola() {
  return 'hola'
 }
}
