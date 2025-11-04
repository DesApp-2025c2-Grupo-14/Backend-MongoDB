const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearPaciente,obtenerGrupoFamiliar } = require('../controllers/pacienteControllers');
const {obtenerHistorialClinico} = require('../controllers/historialController'); 
const {obtenerSituacionTerapeutica, crearNuevaSituacionTerapeutica,eliminarSituacion} = require('../controllers/situacionController')
const { modificarFechaFinalizacion } = require('../controllers/situacionController');
const { validarFechaFinal} = require('../middlewares/validarFechaFinal');
const { validarFechas} = require('../middlewares/validarFechas');


//para pacientes
router.get('/', obtenerPacientes);
//router.get('/:nAfiliado/grupoFamiliar', obtenerGrupoFamiliar);
router.post('/', crearPaciente);

//para historial clinico
//router.get('/:nAfiliado/historiasClinicas', obtenerHistorialClinico);
router.get('/:id/historiasClinicas', obtenerHistorialClinico);

// para situacion terapeutica
            //aca lo cambie a id en vez de nroafiliado
router.post('/:id/crearSituacion', validarFechas, crearNuevaSituacionTerapeutica);
router.get('/:id/situacionesTerapeuticas', obtenerSituacionTerapeutica);
router.patch('/:id/situacion', validarFechaFinal, modificarFechaFinalizacion);
router.patch('/:id/eliminarSituacion', eliminarSituacion);

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

