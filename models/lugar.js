const { dir } = require('console');
const {v4:uuidv4} = require('uuid');

class Lugar{
    constructor(ubicacion, direccion, estacionamiento){
        this.ubicacion = uuidv4,
        this.direccion = dir,
        this.estacionamiento = estacionamiento
    }
}

class ListaLugares{
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
        datos.forEach(Lugar => {
            this._listado[precio.id] = Lugar;
        });
    }

    crearEnvio(datos){
        const Lugar= new Lugar(
            datos.ubicacion,
            datos.direccion,
            datos.estacionamiento);
            this._listado[Lugar.id] = Lugar;
    }
}

module.exports = {
    ListaLugares
}