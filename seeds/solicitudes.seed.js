const Solicitud = require('../models/solicitud');
const Paciente = require('../models/paciente');
const Prestador = require('../models/prestador');

async function seedSolicitudes() {
    const pacientes = await Paciente.find();
    const prestadores = await Prestador.find();

    if (!prestadores.length || !pacientes.length) {
        console.log('❌ No hay prestadores o pacientes cargados.');
        return;
    }

    const prestador = prestadores[0]; // Dr de quien vamos a tomar todos los datos
    const paciente = pacientes[2] || pacientes[0]; // Tomamos uno existente para ejemplo

    const solicitudes = [];

    // 🧾 5 de tipo Receta
    const recetas = [
        {
        observaciones: 'Receta de analgésico para dolor lumbar',
        estado: 'En analisis',
        },
        {
        observaciones: 'Vacuna antigripal anual',
        estado: 'Aprobada',
        },
        {
        observaciones: 'Antibiótico por infección respiratoria',
        estado: 'Aprobada',
        },
        {
        observaciones: 'Antiséptico tópico para heridas leves',
        estado: 'Observada',
        },
        {
        observaciones: 'Crema dermatológica recetada',
        estado: 'Pendiente',
        },
    ].map((r) => ({
        ...r,
        prestadorId: r.estado !== "Pendiente" ? prestador._id : null,
        pacienteId: paciente._id,
        tipo: 'Receta',
    }));

    // 💸 5 de tipo Reintegro
    const reintegros = [
        {
        fechaPrestacion: new Date('2025-09-25'),
        observaciones: 'Reintegro por sesión de kinesiología',
        estado: 'Pendiente',
        },
        {
        fechaPrestacion: new Date('2025-09-26'),
        observaciones: 'Reintegro por compra de medicamentos',
        estado: 'Aprobada',
        },
        {
        fechaPrestacion: new Date('2025-09-27'),
        observaciones: 'Reintegro por consulta oftalmológica',
        estado: 'En analisis',
        },
        {
        fechaPrestacion: new Date('2025-09-28'),
        observaciones: 'Reintegro por estudios de laboratorio',
        estado: 'Aprobada',
        },
        {
        fechaPrestacion: new Date('2025-09-29'),
        observaciones: 'Reintegro por placas radiográficas',
        estado: 'Observada',
        },
    ].map((r) => ({
        ...r,
        prestadorId: r.estado !== "Pendiente" ? prestador._id : null,
        pacienteId: paciente._id,
        medico: prestador.nombre,
        especialidad: 'Clínica Médica',
        lugar: 'Consultorio Central',
        tipo: 'Reintegro',
    }));

    // 🩺 5 de tipo Autorizacion
    const autorizaciones = [
        {
        fechaPrestacion: new Date('2025-10-15'),
        observaciones: 'Autorización para resonancia magnética',
        estado: 'En analisis',
        },
        {
        fechaPrestacion: new Date('2025-10-16'),
        observaciones: 'Autorización para cirugía menor',
        estado: 'Pendiente',
        },
        {
        fechaPrestacion: new Date('2025-10-17'),
        observaciones: 'Autorización para tomografía',
        estado: 'Aprobada',
        },
        {
        fechaPrestacion: new Date('2025-10-18'),
        observaciones: 'Autorización para estudios cardiológicos',
        estado: 'Aprobada',
        },
        {
        fechaPrestacion: new Date('2025-10-19'),
        observaciones: 'Autorización para análisis hormonales',
        estado: 'Observada',
        },
    ].map((r) => ({
        ...r,
        prestadorId: r.estado !== "Pendiente" ? prestador._id : null,
        pacienteId: paciente._id,
        medico: prestador.nombre,
        especialidad: 'Diagnóstico por Imágenes',
        lugar: 'Centro Médico Norte',
        tipo: 'Autorizacion',
    }));

    solicitudes.push(...recetas, ...reintegros, ...autorizaciones);

    try {
        await Solicitud.deleteMany({});
        await Solicitud.insertMany(solicitudes);
        console.log(`✅ ${solicitudes.length} solicitudes insertadas para ${prestador.nombre}`);
    } catch (error) {
        console.error('❌ Error al insertar las solicitudes:', error.message);
    }
}

module.exports = { seedSolicitudes };