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
        console.log(objeto[0].MetaData[3].Nombre)
        labels.push(objeto[i].MetaData[3].Nombre)
        data.push(objeto[i].Data[0].valor)
    }

    return [labels, data]
}