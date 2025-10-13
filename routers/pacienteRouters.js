const { Router } = require('express');
const router = Router();
const { obtenerPacientes, crearNuevaSituacionTerapeutica, crearPaciente, obtenerSituacionTerapeutica,obtenerGrupoFamiliar,obtenerHistoriasClinicas } = require('../controllers/pacienteControllers');
const { validEdad, validNroAfiliado , validUser, validEmail,validNombre} = require('../Midlewares/pacienteMidlewares.jsx');

router.get('/', obtenerPacientes);
router.get('/:nAfiliado/situacionesTerapeuticas', obtenerSituacionTerapeutica);
router.get('/:nAfiliado/grupoFamiliar', obtenerGrupoFamiliar);
router.get('/:nAfiliado/historiasClinicas', obtenerHistoriasClinicas);
router.post('/',validUser,validEmail,validNombre,validEdad, validNroAfiliado, crearPaciente);
router.post('/:nAfiliado/crearSituacion', crearNuevaSituacionTerapeutica);


module.exports = router;