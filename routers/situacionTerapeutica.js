const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearNuevaSituacionTerapeutica, crearPaciente } = require('../controllers/pacienteControllers');

router.get('/', obtenerPacientes);


module.exports = router;