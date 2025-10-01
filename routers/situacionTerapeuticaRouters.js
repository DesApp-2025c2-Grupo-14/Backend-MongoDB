const { Router } = require('express');
const router = Router();
const { obtenerPacientes} = require('../controllers/pacienteControllers');

router.get('/', obtenerPacientes);


module.exports = router;