// metodos o funciones en un objeto

const persona = {
 nombre: 'Heidy',
 trabajo: 'Desarrollador Web',
 edad: 500,
 musicaRock: true,
 mostratInformacion() {
  console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
 },
}

persona.mostratInformacion()
