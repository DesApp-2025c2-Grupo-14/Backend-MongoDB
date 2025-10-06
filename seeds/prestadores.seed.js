const Prestador = require('../models/prestador')

const prestadores = [
    {
        "cuit": "20-34567890-1",
        "nombre": "Dr. Martín González",
        "centroMedico": false,
        "integraCM": true,
        "lugaresAtencion": [
        {
            "nombre": "Consultorio Central",
            "direccion": "Av. Rivadavia 10300, Caballito",
            "horarios": [
                { "dia": "Lunes", "desde": "09:00", "hasta": "13:00" },
                { "dia": "Miércoles", "desde": "15:00", "hasta": "19:00" },
                { "dia": "Viernes", "desde": "09:00", "hasta": "13:00" }
            ]
        }
        ]
    },
    {
        "cuit": "23-98765432-0",
        "nombre": "Dra. Laura Pérez",
        "centroMedico": false,
        "integraCM": false,
        "lugaresAtencion": [
        {
            "nombre": "Consultorio Norte",
            "direccion": "Av. del Libertador 4500, Vicente López",
            "horarios": [
                { "dia": "Martes", "desde": "10:00", "hasta": "17:00" },
                { "dia": "Jueves", "desde": "10:00", "hasta": "17:00" }
            ]
        }
        ]
    },
    {
        "cuit": "27-65432109-8",
        "nombre": "Dr. Pablo Rodríguez",
        "centroMedico": false,
        "integraCM": true,
        "lugaresAtencion": [
        {
            "nombre": "Consultorio Oeste",
            "direccion": "Av. Gaona 5800, Ramos Mejía",
            "horarios": [
                { "dia": "Lunes", "desde": "14:00", "hasta": "18:00" },
                { "dia": "Miércoles", "desde": "14:00", "hasta": "18:00" },
                { "dia": "Viernes", "desde": "10:00", "hasta": "14:00" }
            ]
        }
        ]
    },
    {
        "cuit": "30-11223344-9",
        "nombre": "Centro Médico Belgrano",
        "centroMedico": true,
        "integraCM": true,
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

async function seedPrestadores() {
    
    try {
        await Prestador.deleteMany({})
        await Prestador.insertMany(prestadores)
    } catch (error) {
        console.log('Error al insertar los prestadores', error.message)
    }
}

module.exports = {seedPrestadores}