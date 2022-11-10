const {Router} = require('express')
const{
    GetHorarios,
    PostHorarios,
    PutHorarios,
    DeleteHorarios
} = require('../controllers/horario')

const router = Router();

router.get('/', GetHorarios)
router.app.post('/', PostHorarios)
router.app.put('/id', PutHorarios)
router.app.delete('/id', DeleteHorarios)

module.exports = router