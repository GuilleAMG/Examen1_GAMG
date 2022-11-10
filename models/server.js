const express = require('express')

class server{
    constructor(){
            this.app = express()
            this.app.use(cors());
            this.app.use(express.json())
            this.app.use(express.static('public'));
            this.routes();
        }

    routes(){
        this.app.use('/evento', require('/../routes/evento'))
        this.app.use('/fecha', require('/../routes/fecha'))
        this.app.use('/lugar', require('/../routes/lugar'))
        this.app.use('/horario', require('/../routes/horario'))
        this.app.use('/capacidad', require('/../routes/capacidad'))
    }

    listen(){
        this.app.listen(process.env.PORT, () =>
        console.log("El puerto esta corriendo el puerto TCP: " + process.env.PORT))
    }
}

module.exports = server