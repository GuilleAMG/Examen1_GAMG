const {v4:uuidv4} = require('uuid');

class Capacidad{
    constructor(MaxCap, zonasEvento, CapZona){
        this.MaxCap = uuidv4,
        this.zonasEvento = zonasEvento,
        this.CapZona = CapZona
    }
}

class ListaInvitados{
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
        datos.forEach(capacidad => {
            this._listado[CapMax.id] = paquete;
        });
    }

    crearListaInvitados(datos){
        const paquete = new Capacidad(
            datos.CapMax,
            datos.zonasEvento,
            datos.CapZona);
            this._listado[CapMax.id] = capacidad;
    }
}

module.exports = {
    ListaInvitados
}



