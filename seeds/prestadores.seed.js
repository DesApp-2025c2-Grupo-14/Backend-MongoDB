const Prestador = require('../models/prestador')

async function seedPrestadores() {
    
    const centros = await Prestador.find();
    
    if (!centros.length) {
        console.log('No hay centros cargados.');
        return;
    }

    const prestadores = [
        {
            "cuit": "20-34567890-1",
            "nombre": "Dr. Hernan Gutierrez",
            "especialidad": "Clínica Médica",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "23-98765432-0",
            "nombre": "Dra. Laura Pérez",
            "especialidad": "Pediatría",
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
            "especialidad": "Traumatología",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "20-97451247-1",
            "nombre": "Dr. Hernan Carabajal",
            "especialidad": "Clínica Médica",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "23-96124578-0",
            "nombre": "Dra. Laura Pérez Roldán",
            "especialidad": "Pediatría",
            "centroMedico": false,
            "integraCM": true,
            "lugaresAtencion": [
                {
                    "nombre": "Consultorio Norte",
                    "direccion": "Av. del Libertador 4500, Vicente López",
                    "horarios": [
                        { "dia": "Martes", "desde": "10:00", "hasta": "17:00" },
                        { "dia": "Jueves", "desde": "10:00", "hasta": "17:00" }
                    ]
                }
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "27-70804598-8",
            "nombre": "Dr. Pablo Gomez",
            "especialidad": "Traumatología",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "20-34567890-1",
            "nombre": "Dr. Gustavo Diaz",
            "especialidad": "Clínica Médica",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "23-91547812-0",
            "nombre": "Dra. Laura Paisa",
            "especialidad": "Pediatría",
            "centroMedico": false,
            "integraCM": true,
            "lugaresAtencion": [
                {
                    "nombre": "Consultorio Norte",
                    "direccion": "Av. del Libertador 4500, Vicente López",
                    "horarios": [
                        { "dia": "Martes", "desde": "10:00", "hasta": "17:00" },
                        { "dia": "Jueves", "desde": "10:00", "hasta": "17:00" }
                    ]
                }
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "27-69879512-8",
            "nombre": "Dr. Lucas Guterreza",
            "especialidad": "Traumatología",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "20-34567890-1",
            "nombre": "Dr. Horacio Chain",
            "especialidad": "Clínica Médica",
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
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "23-92546970-0",
            "nombre": "Dra. Yamila Pesoa",
            "especialidad": "Pediatría",
            "centroMedico": false,
            "integraCM": true,
            "lugaresAtencion": [
                {
                    "nombre": "Consultorio Norte",
                    "direccion": "Av. del Libertador 4500, Vicente López",
                    "horarios": [
                        { "dia": "Martes", "desde": "10:00", "hasta": "17:00" },
                        { "dia": "Jueves", "desde": "10:00", "hasta": "17:00" }
                    ]
                }
            ],
            "centroMedicoId": centros[0]._id
        },
        {
            "cuit": "27-53147823-8",
            "nombre": "Dr. Alejo Corbera",
            "especialidad": "Traumatología",
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
            ],
            "centroMedicoId": centros[0]._id
        }
    ]

    try {
        await Prestador.insertMany(prestadores)
    } catch (error) {
        console.log('Error al insertar los prestadores', error.message)
    }
}

module.exports = { seedPrestadores }