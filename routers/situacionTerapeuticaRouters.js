const { Router } = require('express');
const router = Router();
const { modificarFechaFinalizacion, eliminarSituacion} = require('../controllers/situacionController');

router.patch('/:id', eliminarSituacion);
router.patch('/:id/cambiarFecha',modificarFechaFinalizacion)

module.exports = router;