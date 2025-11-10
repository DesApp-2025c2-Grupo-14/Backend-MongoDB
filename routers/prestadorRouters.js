const express = require('express');
const router = express.Router();
const Prestador = require('../models/prestador');
const Solicitud = require('../models/solicitud');

// Traer a todos los prestadores
router.get('/', async (req, res) => {
    try {
        const prestadores = await Prestador.find();
        res.json(prestadores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    });

    // Traer un prestador por el ID
    router.get('/:id', async (req, res) => {
    try {
        const prestador = await Prestador.findById(req.params.id);
        if (!prestador) {
        return res.status(404).json({ message: 'Prestador no encontrado' });
        }
        res.json(prestador);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    });

    // solicitudes prestador
    router.get('/:id/solicitudes', async (req, res) => {
    try {
        const { id } = req.params;
        const solicitudes = await Solicitud.find({ prestadorId: id })
        .populate('pacienteId').populate('prestadorId'); 

        if (solicitudes.length === 0) {
        return res.status(404).json({ message: 'Este prestador no tiene solicitudes asignadas.' });
        }

        res.json(solicitudes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    });

module.exports = router;

