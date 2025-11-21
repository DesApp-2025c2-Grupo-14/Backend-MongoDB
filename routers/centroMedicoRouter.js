const express = require('express');
const router = express.Router();
const CentroMedico = require('../models/centroMedico');

// Obtener todos los centros
router.get('/', async (req, res) => {
    try {
        const centrosMedicos = await CentroMedico.find();
        res.json(centrosMedicos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login por CUIT
router.get('/login/:cuit', async (req, res) => {
    try {
        const { cuit } = req.params;

        const centroMedico = await CentroMedico.findOne({ cuit });

        if (!centroMedico) {
            return res.status(404).json({ message: 'Centro médico no encontrado' });
        }

        res.json(centroMedico);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

    router.get('/:id', async (req,res) => {
        try{
            const centroMedico = await CentroMedico.findById(req.params.id);
            if(!centroMedico) {
                return res.status(404).json({message : 'Centro medico no encontrado'});
            }
            res.json(centroMedico);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })



// Obtener prestadores de un centro médico
router.get('/:id/prestadores', async (req, res) => {
    try {
        const { id } = req.params;

        const centroMedico = await CentroMedico
            .findById(id)
            .populate('prestadores');

        if (!centroMedico) {
            return res.status(404).json({ message: 'Centro médico no encontrado' });
        }

        res.json(centroMedico);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
