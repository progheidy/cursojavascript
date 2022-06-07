// Object literal enhacement

const banda = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman']

// forma anterior
// const metallica = {
//       banda : banda,
//       genero: genero,
//       canciones: canciones
// }

// forma nueva
const metallica = { banda, genero, canciones }

console.log(metallica)
