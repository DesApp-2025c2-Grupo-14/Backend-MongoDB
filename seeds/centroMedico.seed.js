const Prestador = require('../models/prestador')

const prestadores = [

    {
        "cuit": "30-53546634-9",
        "nombre": "Centro Médico René Favaloro",
        "centroMedico": true,
        "integraCM": false,
        "lugaresAtencion": [
        {
            "nombre": "Sede Central",
            "direccion": "Av. Rivadavia 534, Buenos Aires",
            "horarios": [
            { "dia": "Lunes", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Martes", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Miércoles", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Jueves", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Viernes", "desde": "08:00", "hasta": "18:00" }
            ]
        }
        ]
    },
        {
        "cuit": "30-11223344-9",
        "nombre": "Centro Médico Belgrano",
        "centroMedico": true,
        "integraCM": false,
        "lugaresAtencion": [
        {
            "nombre": "Sede Belgrano",
            "direccion": "Av. Cabildo 2500, Buenos Aires",
            "horarios": [
            { "dia": "Lunes", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Martes", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Miércoles", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Jueves", "desde": "08:00", "hasta": "20:00" },
            { "dia": "Viernes", "desde": "08:00", "hasta": "18:00" }
            ]
        }
        ]
    },
    {
        "cuit": "30-55667788-2",
        "nombre": "Clínica Los Andes",
        "centroMedico": true,
        "integraCM": false,
        "lugaresAtencion": [
        {
            "nombre": "Sucursal Central",
            "direccion": "Av. Las Heras 1200, Mendoza",
            "horarios": [
            { "dia": "Lunes", "desde": "07:00", "hasta": "19:00" },
            { "dia": "Martes", "desde": "07:00", "hasta": "19:00" },
            { "dia": "Miércoles", "desde": "07:00", "hasta": "19:00" },
            { "dia": "Jueves", "desde": "07:00", "hasta": "19:00" },
            { "dia": "Viernes", "desde": "07:00", "hasta": "17:00" },
            { "dia": "Sábado", "desde": "08:00", "hasta": "12:00" }
            ]
        }
        ]
    }
]

async function seedCentroMedico() {
    
    try {
        await Prestador.deleteMany({})
        await Prestador.insertMany(prestadores)
    } catch (error) {
        console.log('Error al insertar el centro médico', error.message)
    }
}

module.exports = {seedCentroMedico}