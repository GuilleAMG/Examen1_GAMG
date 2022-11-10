const {request, response} = require('express')
const {ListaInvitados} = require('../models/capacidad');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetCapMax = (req = request, res = response) => {
    let lista = new ListaInvitados()
    let datosJSON = leerDB('capacidad');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
    
const PostCapMax = (req = request, res = response) => {
    let lista = new ListaInvitados()
    let datosJSON = leerDB('capacidad');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearListaInivitados(req.body)
    guardarDB(lista.listadoArr, 'capacidad')
    res.send('Registro Creado')
}

const PutCapMax = (req = request, res = response) => {
    let lista = new ListaInvitados()
    let datosJSON = leerDB('capacidad');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'capacidad')
    res.send('Registro Actualizado')
}

const DeleteCapMax = (req = request, res = response) => {
    let lista = new ListaInvitados()
    let datosJSON = leerDB('capacidad');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'capacidad')
    res.send('Registro Eliminado')
}

module.exports ={
    GetCapMax,
    PostCapMax,
    PutCapMax,
    DeleteCapMax
}