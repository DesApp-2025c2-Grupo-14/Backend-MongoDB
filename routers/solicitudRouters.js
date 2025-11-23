const { Router } = require('express');
const router = Router();
const {obtenerSolicitudesPendientes, getDetalleById, analizarSolicitud, getSolicitudesPrestador, getEstadisticasSolicitudes, getPrestadorId} = require('../controllers/solicitudController');

router.get('/', obtenerSolicitudesPendientes);
router.get('/detalle/:tipo/:id', getDetalleById);
router.get('/prestador', getPrestadorId);
router.patch('/:id', analizarSolicitud);
router.get('/mis-solicitudes', getSolicitudesPrestador);
router.get('/dashboard', getEstadisticasSolicitudes);
module.exports = router;