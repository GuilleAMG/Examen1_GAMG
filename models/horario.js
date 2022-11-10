const {v4:uuidv4} = require('uuid');

class Horario{
    constructor(jornadas, horaInicio, horaFin, horaPrevia){
        this.horaInicio = uuidv4,
        this.jornadas = jornadas,
        this.horaFin = horaFin,
        this.horaPrevia = horaPrevia
    }
}

class ListaHorarios{
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
        datos.forEach(Horario => {
            this._listado[Horario.id] = Horario;
        });
    }

    crearHorario(datos){
        const Horario = new Horario(
            datos.jornadas,
            datos.horaInicio,
            datos.horaFin,
            datos.horaPrevia);
            this._listado[Horario.id] = Horario;
    }
}

module.exports = {
    ListaHorarios
}