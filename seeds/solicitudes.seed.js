const Solicitud = require('../models/solicitud');
const Paciente = require('../models/paciente');
const Prestador = require('../models/prestador');

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomEstado() {
    const estados = ["Pendiente", "En analisis", "Aprobada", "Observada"];
    return randomItem(estados);
}

async function seedSolicitudes() {
    const pacientes = await Paciente.find();
    const prestadores = await Prestador.find();

    if (!prestadores.length || !pacientes.length) {
        console.log("❌ No hay prestadores o pacientes cargados.");
        return;
    }

    const prestador = prestadores[0]; // asignar todo al prestador[0]

    const solicitudes = [];

    // ======== GENERADORES ========

    const observacionesRecetas = [
        "Receta de analgésico",
        "Antibiótico por infección",
        "Crema dermatológica",
        "Vacuna antigripal",
        "Analgésico muscular",
        "Tratamiento para migraña",
        "Suplemento vitamínico",
        "Gotas óticas",
        "Jarabe para tos",
        "Receta prolongada mensual",
    ];

    const observacionesReintegros = [
        "Reintegro por consulta médica",
        "Reintegro por sesiones de kinesiología",
        "Reintegro por medicamentos",
        "Reintegro por radiografías",
        "Reintegro por análisis clínicos",
    ];

    const observacionesAutorizaciones = [
        "Autorización para resonancia",
        "Autorización para tomografía",
        "Autorización para cirugía ambulatoria",
        "Autorización para estudios cardíacos",
        "Autorización para análisis hormonales",
    ];

    // ======== CREAR 50 RECETAS ========
    for (let i = 0; i < 50; i++) {
        solicitudes.push({
            tipo: "Receta",
            estado: randomEstado(),
            observaciones: randomItem(observacionesRecetas),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id
        });
    }

    // ======== CREAR 50 REINTEGROS ========
    for (let i = 0; i < 20; i++) {
        solicitudes.push({
            tipo: "Reintegro",
            estado: randomEstado(),
            observaciones: randomItem(observacionesReintegros),
            fechaPrestacion: new Date(2025, 8, Math.ceil(Math.random() * 28)),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id,
            medico: prestador.nombre,
            especialidad: "Clínica Médica",
            lugar: "Consultorio Central"
        });
    }
    for (let i = 0; i < 30; i++) {
        solicitudes.push({
            tipo: "Reintegro",
            estado: randomEstado(),
            observaciones: randomItem(observacionesReintegros),
            fechaPrestacion: new Date(2025, 9, Math.ceil(Math.random() * 28)),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id,
            medico: prestador.nombre,
            especialidad: "Clínica Médica",
            lugar: "Consultorio Central"
        });
    }
    for (let i = 0; i < 30; i++) {
        solicitudes.push({
            tipo: "Reintegro",
            estado: randomEstado(),
            observaciones: randomItem(observacionesReintegros),
            fechaPrestacion: new Date(2025, 10, Math.ceil(Math.random() * 28)),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id,
            medico: prestador.nombre,
            especialidad: "Clínica Médica",
            lugar: "Consultorio Central"
        });
    }

    // ======== CREAR 50 AUTORIZACIONES ========
    for (let i = 0; i < 20; i++) {
        solicitudes.push({
            tipo: "Autorizacion",
            estado: randomEstado(),
            observaciones: randomItem(observacionesAutorizaciones),
            fechaPrestacion: new Date(2025, 8, Math.ceil(Math.random() * 28)),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id,
            medico: prestador.nombre,
            especialidad: "Diagnóstico por Imágenes",
            lugar: "Centro Médico Norte"
        });
    }
    for (let i = 0; i < 30; i++) {
        solicitudes.push({
            tipo: "Autorizacion",
            estado: randomEstado(),
            observaciones: randomItem(observacionesAutorizaciones),
            fechaPrestacion: new Date(2025, 9, Math.ceil(Math.random() * 28)),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id,
            medico: prestador.nombre,
            especialidad: "Diagnóstico por Imágenes",
            lugar: "Centro Médico Norte"
        });
    }
    for (let i = 0; i < 30; i++) {
        solicitudes.push({
            tipo: "Autorizacion",
            estado: randomEstado(),
            observaciones: randomItem(observacionesAutorizaciones),
            fechaPrestacion: new Date(2025, 10, Math.ceil(Math.random() * 28)),
            pacienteId: randomItem(pacientes)._id,
            prestadorId: prestador._id,
            medico: prestador.nombre,
            especialidad: "Diagnóstico por Imágenes",
            lugar: "Centro Médico Norte"
        });
    }

    // Insertar todo
    try {
        await Solicitud.deleteMany({});
        await Solicitud.insertMany(solicitudes);
        console.log(`✅ ${solicitudes.length} solicitudes insertadas correctamente para el prestador ${prestador.nombre}`);
    } catch (error) {
        console.error("❌ Error al insertar las solicitudes:", error.message);
    }
}

module.exports = { seedSolicitudes };
