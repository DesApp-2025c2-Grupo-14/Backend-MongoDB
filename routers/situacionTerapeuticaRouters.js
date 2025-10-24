const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearPaciente,obtenerGrupoFamiliar } = require('../controllers/pacienteControllers');
const {obtenerHistorialClinico} = require('../controllers/historialController'); 
const {obtenerSituacionTerapeutica, crearNuevaSituacionTerapeutica,eliminarSituacion} = require('../controllers/situacionController')
const { modificarFechaFinalizacion } = require('../controllers/situacionController');
const { validarFechaFinal} = require('../middlewares/validarFechaFinal');
const { validarFechas} = require('../middlewares/validarFechas');
const { validarDescripcion} = require('../middlewares/validarDescripcion');

router.delete('/:id', eliminarSituacion);
router.patch('/:id/cambiarFecha',modificarFechaFinalizacion);
router.get('/', obtenerSituacionTerapeutica);
router.post('/', crearNuevaSituacionTerapeutica);

module.exports = router;