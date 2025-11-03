const { Router } = require('express');
const router = Router();
const {obtenerSolicitudesPendientes, getDetalleById, analizarSolicitud} = require('../controllers/solicitudController');

router.get('/', obtenerSolicitudesPendientes);
router.get('/:tipo/:id', getDetalleById);
router.patch('/:id', analizarSolicitud);


module.exports = router;