const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearPaciente,obtenerGrupoFamiliar, borrarPaciente, obtenerPaciente} = require('../controllers/pacienteControllers');
const {obtenerHistorialClinico} = require('../controllers/historialController'); 
const {obtenerSituacionTerapeutica, crearNuevaSituacionTerapeutica, eliminarSituacion} = require('../controllers/situacionController')
const { modificarFechaFinalizacion } = require('../controllers/situacionController');
const { validarFechaFinal} = require('../middlewares/validarFechaFinal');
const { validarFechas} = require('../middlewares/validarFechas');
const { validarDescripcion} = require('../middlewares/validarDescripcion');
const { validarTitulo} = require('../middlewares/validarTitulo');
const { validarObjectId} = require('../middlewares/validarObjectId');



//para pacientes
router.get('/:id',validarObjectId,obtenerPaciente);  // funcionando
router.delete('/:id/eliminarPaciente',validarObjectId,borrarPaciente); //funcionando
router.get('/:id/grupoFamiliar',validarObjectId, obtenerGrupoFamiliar); //funcionando
router.post('/', crearPaciente); //funcionando
router.get('/', obtenerPacientes);  //funcionando

//para historial clinico
router.get('/:id/historiasClinicas',validarObjectId, obtenerHistorialClinico); //funcionando

// para situacion terapeutica
//aca lo cambie a id en vez de nroafiliado
router.post('/:id/crearSituacion',validarObjectId,validarFechas, validarDescripcion,validarTitulo,crearNuevaSituacionTerapeutica);
router.get('/:id/situacionesTerapeuticas',validarObjectId,obtenerSituacionTerapeutica);
router.patch('/:id/situacion',validarObjectId,validarFechaFinal, modificarFechaFinalizacion);
router.delete('/:id/eliminarSituacion',validarObjectId,eliminarSituacion);

module.exports = router;

// aca nos convendria cambiar todas las rutas para que usen id en vez de nrafiliado


/* 
Historias clinicas
Consulta con todo
http://localhost:3001/pacientes/10001-01/historiasClinicas/
Consulta con prestador
http://localhost:3001/pacientes/10001-01/historiasClinicas?prestador=Dr.%20Peralta
*/

/* 
Situacion terapeutica 
patch de situacion
http://localhost:3001/pacientes/68ee8e5daf9d2f7c912b53c5/situacion
post de creacion
http://localhost:3001/pacientes/68eea2996906ba6c6dc852a5/crearSituacion
delete de situacion
http://localhost:3001/pacientes/68eebb96320a96300cc358d7/eliminarSituacion/
*/

