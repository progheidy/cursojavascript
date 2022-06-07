const descargarUsuarios = (cantidad) =>
 new Promise((resolve, reject) => {
  //pasar la cantidad a la api

  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

  // llamado a ajax
  const xhr = new XMLHttpRequest()

  // abrir la conexión
  xhr.open('GET', api, true)

  // on load
  xhr.onload = () => {
   if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText).results)
   } else {
    reject(Error(xhr.statusText))
   }
  }

  // opcional (on error)
  xhr.onerror = (error) => reject(error)

  // send
  xhr.send()
 })

descargarUsuarios(30).then(
 (miembros) => imprimirHTML(miembros),
 (error) => console.error(new Error('Hubo un error' + error))
)

function imprimirHTML(usuarios) {
 let html = ''
 usuarios.forEach((usuario) => {
  html += `
             <li>
                  Nombre: ${usuario.name.first} ${usuario.name.last}
                  País: ${usuario.nat}
                  Imagen:
                     <img src="${usuario.picture.medium}">
             </li>`
 })

 const contenedorApp = document.querySelector('#app')
 contenedorApp.innerHTML = html
}
