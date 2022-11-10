const {request, response} = require('express')
const {ListaHorarios} = require('../models/horario');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetHorarios = (req = request, res = response) => {
    let lista = new ListaHorarios()
    let datosJSON = leerDB('horario');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostHorarios = (req = request, res = response) => {
    let lista = new ListaHorarios()
    let datosJSON = leerDB('horario');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearListaHorarios(req.body)
    guardarDB(lista.listadoArr, 'horario')
    res.send('Registro Creado')
}

const PutHorarios = (req = request, res = response) => {
    let lista = new ListaHorarios()
    let datosJSON = leerDB('horario');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'horario')
    res.send('Registro Actualizado')
}

const DeleteHorarios = (req = request, res = response) => {
    let lista = new ListaHorarios()
    let datosJSON = leerDB('horario');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'horario')
    res.send('Registro Eliminado')
}

module.exports ={
    GetHorarios,
    PostHorarios,
    PutHorarios,
    DeleteHorarios
}