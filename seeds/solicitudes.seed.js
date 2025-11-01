const Solicitud = require('../models/solicitud')
const Paciente = require('../models/paciente')
const Prestador = require('../models/prestador')

async function seedSolicitudes() {
    const pacientes = await Paciente.find()
    const prestadores = await Prestador.find()
    const solicitudes = [
    {
        pacienteId: pacientes[0]._id,
        fechaPrestacion: new Date('2025-10-07'),
        medico: 'Dr. Martín González',
        especialidad: 'Cardiología',
        lugar: 'Consultorio Central',
        observaciones: 'Paciente con dolor torácico leve',
        tipo: 'Reintegro',
        estado: 'Pendiente'
    },
    {
        pacienteId: pacientes[1]._id,
        fechaPrestacion: new Date('2025-10-08'),
        medico: 'Dra. Laura Pérez',
        especialidad: 'Obstetricia',
        lugar: 'Consultorio Norte',
        observaciones: 'Ecografía',
        tipo: 'Autorizacion',
        estado: 'Pendiente'
    },
    {
        prestadorId : prestadores[0]._id,
        pacienteId: pacientes[2]._id,
        observaciones: 'Analgésico',
        tipo: 'Receta',
        estado: 'En analisis'
    },
    {
        prestadorId : prestadores[0]._id,
        pacienteId: pacientes[2]._id,
        observaciones: 'Vacuna',
        tipo: 'Receta',
        estado: 'Aprobada'
    },
    {
        prestadorId : prestadores[0]._id,
        pacienteId: pacientes[2]._id,
        observaciones: 'Antibiótico',
        tipo: 'Receta',
        estado: 'Aprobada'
    },
    {
        prestadorId : prestadores[0]._id,
        pacienteId: pacientes[2]._id,
        observaciones: 'Antiséptico',
        tipo: 'Receta',
        estado: 'Observada'
    }
]
    try {
        await Solicitud.deleteMany({})
        await Solicitud.insertMany(solicitudes)
    } catch (error) {
        console.log('Error al insertar las solicitudes', error.message)
    }
}

module.exports = {seedSolicitudes}