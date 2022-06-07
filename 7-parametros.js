
// parametros por default en las funciones

const actividad = function (nombre = 'Walter White', actividad = 'Enseñar Química') {
    console.log('La persona Heidy, esta realizando la actividad Aprender JavaScript')
    console.log('La persona Juan, esta realizando la actividad Creando un sitio web')
    console.log('La persona Antonio, esta realizando la actividad Enseñar Quimica')
}
 


actividad('Heidy', 'Aprender JavaScript')
actividad('Juan', 'Creando un sitio web')
actividad('Antonio')
