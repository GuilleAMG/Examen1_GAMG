const {Router} = require('express')
const{
    GetFechas,
    PostFechas,
    PutFechas,
    DeleteFechas
} = require('../controllers/fecha')

const router = Router();

router.get('/', GetFechas)
router.app.post('/', PostFechas)
router.app.put('/:id', PutFechas)
router.app.delete('/id', DeleteFechas)

module.exports = router