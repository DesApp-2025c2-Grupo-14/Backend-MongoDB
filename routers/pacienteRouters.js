const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearPaciente,obtenerGrupoFamiliar } = require('../controllers/pacienteControllers');
const {obtenerHistorialClinico} = require('../controllers/historialController'); 
const {obtenerSituacionTerapeutica, crearNuevaSituacionTerapeutica} = require('../controllers/situacionController')

router.get('/', obtenerPacientes);
router.get('/:nAfiliado/situacionesTerapeuticas', obtenerSituacionTerapeutica);
router.get('/:nAfiliado/grupoFamiliar', obtenerGrupoFamiliar);
router.get('/:nAfiliado/historiasClinicas', obtenerHistorialClinico);
router.post('/', crearPaciente);
router.post('/:nAfiliado/crearSituacion', crearNuevaSituacionTerapeutica);


module.exports = router;

/* 
Historias clinicas
Consulta con todo
http://localhost:3001/pacientes/10001-01/historiasClinicas/
Consulta con prestador
http://localhost:3001/pacientes/10001-01/historiasClinicas?prestador=Dr.%20Peralta
*/