const { Router } = require('express');
const router = Router();
const {obtenerTurnos} = require ('../controllers/turnoController')

router.get('/',obtenerTurnos);

module.exports = router;