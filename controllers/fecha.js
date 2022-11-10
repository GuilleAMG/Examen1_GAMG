const {request, response} = require('express')
const {ListaFechas} = require('../models/fecha');
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetFechas= (req = request, res = response) => {
    let lista = new ListaFechas()
    let datosJSON = leerDB('fecha');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostFechas = (req = request, res = response) => {
    let lista = new ListaFechas()
    let datosJSON = leerDB('fecha');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearFecha(req.body)
    guardarDB(lista.listadoArr, 'fecha')
    res.send('Registro Creado')
}

const PutFechas = (req = request, res = response) => {
    let lista = new ListaFechas()
    let datosJSON = leerDB('fecha');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id ? {
            "id":p.id,...req.body
        } : p
    );
    guardarDB(datos, 'fecha')
    res.send('Registro Actualizado')
}

const DeleteFechas = (req = request, res = response) => {
    let lista = new ListaFechas()
    let datosJSON = leerDB('fecha');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'fecha')
    res.send('Registro Eliminado')
}

module.exports ={
    GetFechas,
    PostFechas,
    PutFechas,
    DeleteFechas
}