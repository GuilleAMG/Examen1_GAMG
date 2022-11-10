const {Router} = require('express')
const{
    GetCapMax,
    PostCapMax,
    PutCapMax,
    DeleteCapMax
} = require('../controllers/capacidad')

const router = Router();

router.get('/', GetCapMax)
router.app.post('/', PostCapMax)
router.app.put('/id', PutCapMax)
router.app.delete('/id', DeleteCapMax)

module.exports = router