const {request, response} = require('express')
const {ListaLugares} = require('../models/lugar');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetLugares = (req = request, res = response) => {
    let lista = new ListaLugares()
    let datosJSON = leerDB('lugar');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostLugares = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('lugar');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearListaLugares(req.body)
    guardarDB(lista.listadoArr, 'lugar')
    res.send('Registro Creado')
}

const PutLugares = (req = request, res = response) => {
    let lista = new ListaLugares()
    let datosJSON = leerDB('lugar');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'lugar')
    res.send('Registro Actualizado')
}

const DeleteLugares = (req = request, res = response) => {
    let lista = new ListaLugares()
    let datosJSON = leerDB('lugar');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'lugar')
    res.send('Registro Eliminado')
}

module.exports ={
    GetLugares,
    PostLugares,
    PutLugares,
    DeleteLugares
}