const mongoose = require('mongoose');
const CentroMedico = require('../models/centroMedico');
const Prestador = require('../models/prestador');

async function seedCentrosMedicos() {
    try {
        const prestadores = await Prestador.find();

        if (prestadores.length < 4) {
            console.log("Necesitás al menos 4 prestadores creados para este seed.");
            return;
        }

        const centros = [
            {
                cuit: "30-71548963-9",
                nombre: "Centro Médico Los Arcos",
                direccion: "Av. Rivadavia 4500, CABA",
                horarios: [
                    { dia: "Lunes", desde: "08:00", hasta: "18:00" },
                    { dia: "Martes", desde: "08:00", hasta: "18:00" },
                    { dia: "Miercoles", desde: "08:00", hasta: "18:00" },
                    { dia: "Jueves", desde: "08:00", hasta: "18:00" },
                    { dia: "Viernes", desde: "08:00", hasta: "18:00" }
                ],
                prestadores: [
                    prestadores[0]._id,
                    prestadores[1]._id
                ]
            },
            {
                cuit: "30-54879632-8",
                nombre: "Clínica Santa María",
                direccion: "Belgrano 2100, Morón",
                horarios: [
                    { dia: "Lunes", desde: "09:00", hasta: "17:00" },
                    { dia: "Martes", desde: "09:00", hasta: "17:00" },
                    { dia: "Jueves", desde: "09:00", hasta: "17:00" },
                    { dia: "Viernes", desde: "09:00", hasta: "15:00" }
                ],
                prestadores: [
                    prestadores[2]._id,
                    prestadores[3]._id
                ]
            }
        ];
        await CentroMedico.deleteMany({});
        await CentroMedico.insertMany(centros);

        console.log("Seed de centros médicos creado con éxito ❤️‍🔥");

    } catch (error) {
        console.error("Error al crear los centros médicos:", error);
    }
}

module.exports = { seedCentrosMedicos };
