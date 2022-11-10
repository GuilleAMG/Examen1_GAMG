const {v4:uuidv4} = require('uuid');

class Fecha{
    constructor(dia, mes, anio, fechasN){
        this.mes = uuidv4,
        this.dia = dia,
        this.anio = anio,
        this.fechasN = fechasN
    }
}

class ListaFechas{
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
        datos.forEach(Fecha => {
            this._listado[Fecha.id] = Fecha;
        });
    }

    crearFecha(datos){
        const Fecha = new Fecha(
            datos.dia,
            datos.mes,
            datos.anio,
            datos.fechasN);
            this._listado[Fecha.id] = Fecha;
    }
}

module.exports = {
    ListaFechas
}