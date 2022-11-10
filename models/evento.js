const {v4:uuidv4} = require('uuid');

class Evento{
    constructor(nombre, precio, tipo, organizador){
        this.nombre = uuidv4,
        this.precio = precio,
        this.tipo = tipo,
        this.organizador = organizador
    }
}

class ListaEventos{
    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasFromArray(datos = []){
        datos.forEach(Evento => {
            this._listado[Evento.id] = Evento;
        });
    }

    crearEvento(datos){
        const envio = new Evento(
            datos.nombre,
            datos.precio,
            datos.tipo,
            datos.organizador);
            this._listado[Evento.id] = Evento;
    }
}

module.exports = {
    ListaEventos
}