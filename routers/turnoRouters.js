const { Router } = require('express');
const router = Router();
const {obtenerTurnos, turnosPorEspecialidad} = require ('../controllers/turnoController')

router.get('/',obtenerTurnos);
router.post('/',turnosPorEspecialidad)

module.exports = router;