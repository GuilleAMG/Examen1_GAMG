const {request, response} = require('express')
const {ListaEventos} = require('../models/evento');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetEventos = (req = request, res = response) => {
    let lista = new ListaEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostEventos = (req = request, res = response) => {
    let lista = new ListaEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEvento(req.body)
    guardarDB(lista.listadoArr, 'evento')
    res.send('Registro Creado')
}

const PutEventos = (req = request, res = response) => {
    let lista = new ListaEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'evento')
    res.send('Registro Actualizado')
}

const DeleteEventos = (req = request, res = response) => {
    let lista = new ListaEventos()
    let datosJSON = leerDB('evento');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'evento')
    res.send('Registro Eliminado')
}

module.exports ={
    GetEventos,
    PostEventos,
    PutEventos,
    DeleteEventos
}