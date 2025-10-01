const { Router } = require('express');
const router = Router();
const {obtenerSolicitudesPendientes} = require('../controllers/solicitudController');

router.get('/:estado', obtenerSolicitudesPendientes);


module.exports = router;