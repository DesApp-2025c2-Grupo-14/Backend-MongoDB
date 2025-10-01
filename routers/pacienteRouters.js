const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearNuevaSituacionTerapeutica } = require('../controllers/pacienteControllers');

router.get('/', obtenerPacientes);
router.post('/:nAfiliado/crearSituacion', crearNuevaSituacionTerapeutica);

module.exports = router