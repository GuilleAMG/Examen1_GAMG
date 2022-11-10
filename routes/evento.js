const {Router} = require('express')
const{
    GetEventos,
    PostEventos,
    PutEventos,
    DeleteEventos
} = require('../controllers/evento')

const router = Router();

router.get('/', GetEventos)
router.app.post('/', PostEventos)
router.app.put('/:id', PutEventos)
router.app.delete('/:id', DeleteEventos)

module.exports = router