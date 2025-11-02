const { Router } = require('express');
const router = Router();
const {obtenerSolicitudesPendientes, getDetalleById, analizarSolicitud, getSolicitudesPrestador, getEstadisticasSolicitudes} = require('../controllers/solicitudController');

router.get('/', obtenerSolicitudesPendientes);
router.get('/:tipo/:id', getDetalleById);
router.patch('/:id', analizarSolicitud);
router.get('/mis-solicitudes', getSolicitudesPrestador);
router.get('/dashboard', getEstadisticasSolicitudes);
module.exports = router;