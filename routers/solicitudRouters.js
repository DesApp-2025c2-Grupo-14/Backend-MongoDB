const { Router } = require('express');
const router = Router();
const {obtenerSolicitudesPendientes} = require('../controllers/solicitudController');

router.get('/', obtenerSolicitudesPendientes);


module.exports = router;