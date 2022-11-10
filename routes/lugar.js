const {Router} = require('express')
const{
    GetLugares,
    PostLugares,
    PutLugares,
    DeleteLugares
} = require('../controllers/lugar')

const router = Router();

router.get('/', GetLugares)
router.app.post('/', PostLugares)
router.app.put('/id', PutLugares)
router.app.delete('/id', DeleteLugares)

module.exports = router