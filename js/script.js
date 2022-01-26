'use strict'

window.onload = inicio()

function inicio() {
    fetch('histograma.json')
    .then(respuesta=>respuesta.json())
    .then(objeto=>parsear(objeto))
    
}

function parsear(objeto){

    let labels = []
    let data = []

    for (let i = 0; i < objeto.length; i++) {
        labels.push('Viva Pamplona') //objeto[i].MetaData[3].Nombre);
        data.push(42)
    }

    return [labels, data]
}