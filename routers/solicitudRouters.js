const { Router } = require('express');
const router = Router();
const {
    obtenerSolicitudesPendientes, 
    getDetalleById, 
    actualizarSolicitud, 
    getSolicitudesPrestador, 
    getEstadisticasPrestador, 
    getPrestadorId, 
    getSolicitudesCentroMedico, 
    getEstadisticasCentroMedico
} = require('../controllers/solicitudController');

const { validarEstadoSolicitud } = require('../middlewares/validarEstadoSolicitud');

router.get('/', obtenerSolicitudesPendientes);
router.get('/detalle/:tipo/:id', getDetalleById);
router.get('/prestador', getPrestadorId);
router.patch('/:id', validarEstadoSolicitud, actualizarSolicitud);
router.get('/mis-solicitudes', getSolicitudesPrestador);
router.get('/mis-solicitudes-centro-medico', getSolicitudesCentroMedico);
router.get('/dashboard', getEstadisticasPrestador);
router.get('/dashboard-centro-medico', getEstadisticasCentroMedico);
module.exports = router;