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
    */
   // solicitudes prestador con filtro por rango de fechas (máximo 31 días)
    router.get("/login/:cuit", async (req, res) => {
        try {
            const { cuit } = req.params;
            const prestador = await Prestador.findOne({ cuit });

            if (!prestador) {
            return res.status(404).json({ msg: "Prestador no se si esta encontrado encontrado" });
            }

            res.json(prestador);
        } catch (error) {
            res.status(500).json({ msg: "Error en el servidor" });
        }
        });



    router.get('/:id/solicitudes', async (req, res) => {
        try {
            const { id } = req.params;
            const { fechaInicio, fechaFin } = req.query;

            // Validaciones
            if (!fechaInicio || !fechaFin) {
                return res.status(400).json({
                    message: "Debes enviar fechaInicio y fechaFin. Ejemplo: ?fechaInicio=2025-01-01&fechaFin=2025-01-31"
                });
            }

            const inicio = new Date(fechaInicio);
            const fin = new Date(fechaFin);

            if (isNaN(inicio) || isNaN(fin)) {
                return res.status(400).json({ message: "Formato de fecha inválido." });
            }

            // Máximo 31 días de diferencia
            const diferenciaMs = fin - inicio;
            const max31dias = 31 * 24 * 60 * 60 * 1000;

            if (diferenciaMs < 0) {
                return res.status(400).json({ message: "fechaFin debe ser mayor o igual a fechaInicio." });
            }

            if (diferenciaMs > max31dias) {
                return res.status(400).json({
                    message: "El rango máximo permitido es de 31 días."
                });
            }

            // Traer solicitudes del prestador dentro del rango
            const solicitudes = await Solicitud.find({
                prestadorId: id,
                fechaPrestacion: { $gte: inicio, $lte: fin }
            })
            .populate('pacienteId')
            .populate('prestadorId');

            if (solicitudes.length === 0) {
                return res.status(404).json({
                    message: "No hay solicitudes en el rango de fechas seleccionado."
                });
            }

            res.json(solicitudes);

        } catch (error) {
            console.error("Error al obtener solicitudes:", error);
            res.status(500).json({ message: error.message });
        }
    });

    // Login sencillo por DNI (sin contraseña)
    router.post('/login', async (req, res) => {
        try {
            const { dni } = req.body;

            if (!dni) {
                return res.status(400).json({ message: "Debes ingresar un DNI." });
            }

            const prestador = await Prestador.findOne({ dni });

            if (!prestador) {
                return res.status(404).json({ message: "Prestador no encontrado." });
            }

            // Login exitoso → devolvemos los datos
            res.json({
                message: "Login exitoso",
                prestador: prestador
            });

        } catch (error) {
            console.error("Error en login del prestador:", error);
            res.status(500).json({ message: error.message });
        }
    });

module.exports = router;

