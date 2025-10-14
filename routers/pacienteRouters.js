const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearPaciente,obtenerGrupoFamiliar } = require('../controllers/pacienteControllers');
const {obtenerHistorialClinico} = require('../controllers/historialController'); 
const {obtenerSituacionTerapeutica, crearNuevaSituacionTerapeutica} = require('../controllers/situacionController')
const { modificarFechaFinalizacion } = require('../controllers/situacionController');
const { validarFechaFinal } = require('../middlewares/validarFechaFinal');

//para pacientes
router.get('/', obtenerPacientes);
router.get('/:nAfiliado/grupoFamiliar', obtenerGrupoFamiliar);
router.post('/', crearPaciente);

//para historial clinico
router.get('/:nAfiliado/historiasClinicas', obtenerHistorialClinico);

// para situacion terapeutica
router.post('/:nAfiliado/crearSituacion', crearNuevaSituacionTerapeutica);
router.get('/:nAfiliado/situacionesTerapeuticas', obtenerSituacionTerapeutica);
router.put('/situacion/:id', validarFechaFinal, modificarFechaFinalizacion);


module.exports = router;

/* 
Historias clinicas
Consulta con todo
http://localhost:3001/pacientes/10001-01/historiasClinicas/
Consulta con prestador
http://localhost:3001/pacientes/10001-01/historiasClinicas?prestador=Dr.%20Peralta
*/



