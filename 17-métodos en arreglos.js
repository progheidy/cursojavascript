// Métodos en arreglos

const personas = [
 { nombre: 'Heidy', edad: 23, aprendiendo: 'JavaScript' },
 { nombre: 'Paula', edad: 18, aprendiendo: 'JavaScript' },
 { nombre: 'JAlejandra', edad: 21, aprendiendo: 'JavaScript' },
 { nombre: 'Wendy', edad: 30, aprendiendo: 'JavaScript' },
 { nombre: 'Angel', edad: 35, aprendiendo: 'JavaScript' },
]

console.log(personas)

// mayores de 28 años
const mayores = personas.filter((persona) => {
 return persona.edad > 28
})
// console.log(mayores);

// que aprende alejandra y su edad
const alejandra = personas.find((persona) => {
 return persona.nombre === 'Juan'
})
// console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo);)

let total = personas.reduce((edadTotal, persona) => {
 return edadTotal + persona.edad
}, 0)

console.log(total)
