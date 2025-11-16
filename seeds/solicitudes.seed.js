const Solicitud = require('../models/solicitud');
const Paciente = require('../models/paciente');
const Prestador = require('../models/prestador');

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

async function seedSolicitudes() {
    const pacientes = await Paciente.find();
    const prestadores = await Prestador.find();

    if (!prestadores.length || !pacientes.length) {
        console.log('❌ No hay prestadores o pacientes cargados.');
        return;
    }

    const solicitudes = [];

    // 🧾 5 de tipo Receta
    const recetas = [
        { observaciones: "Dolor de cabeza leve - Ibuprofeno", estado: "Aprobada", fechaPrestacion: new Date("2025-09-01") },
        { observaciones: "Infección respiratoria aguda - Amoxicilina", estado: "Pendiente", fechaPrestacion: new Date("2025-09-02") },
        { observaciones: "Fiebre y malestar - Paracetamol", estado: "En analisis", fechaPrestacion: new Date("2025-09-03") },
        { observaciones: "Inflamación articular - Diclofenac", estado: "Observada", fechaPrestacion: new Date("2025-09-04") },
        { observaciones: "Bronquitis - Azitromicina", estado: "Aprobada", fechaPrestacion: new Date("2025-09-05") },
        { observaciones: "Alergia estacional - Loratadina", estado: "Pendiente", fechaPrestacion: new Date("2025-09-06") },
        { observaciones: "Acidez estomacal - Ranitidina", estado: "En analisis", fechaPrestacion: new Date("2025-09-07") },
        { observaciones: "Dolor infantil - Ibuprofeno Pediátrico", estado: "Aprobada", fechaPrestacion: new Date("2025-09-08") },
        { observaciones: "Eczema leve - Betametasona crema", estado: "Observada", fechaPrestacion: new Date("2025-09-09") },
        { observaciones: "Dolor agudo - Ketorolac", estado: "Rechazada", fechaPrestacion: new Date("2025-09-10") },

        { observaciones: "Infección urinaria - Ciprofloxacina", estado: "Aprobada", fechaPrestacion: new Date("2025-09-11") },
        { observaciones: "Infección cutánea - Clotrimazol", estado: "Pendiente", fechaPrestacion: new Date("2025-09-12") },
        { observaciones: "Reflujo gástrico - Omeprazol", estado: "En analisis", fechaPrestacion: new Date("2025-09-13") },
        { observaciones: "Asma leve - Salbutamol", estado: "Aprobada", fechaPrestacion: new Date("2025-09-14") },
        { observaciones: "Asma persistente - Budesonida", estado: "Observada", fechaPrestacion: new Date("2025-09-15") },
        { observaciones: "Dolor moderado - Ibuprofeno 600mg", estado: "Aprobada", fechaPrestacion: new Date("2025-09-16") },
        { observaciones: "Infección bacteriana - Amoxicilina + Clavulánico", estado: "En analisis", fechaPrestacion: new Date("2025-09-17") },
        { observaciones: "Alergia crónica - Cetirizina", estado: "Pendiente", fechaPrestacion: new Date("2025-09-18") },
        { observaciones: "Dermatitis leve - Clobetasol", estado: "Aprobada", fechaPrestacion: new Date("2025-09-19") },
        { observaciones: "Infección cutánea - Clindamicina", estado: "Rechazada", fechaPrestacion: new Date("2025-09-20") },

        { observaciones: "Otitis - Gotas óticas con Ciprofloxacina", estado: "Aprobada", fechaPrestacion: new Date("2025-09-21") },
        { observaciones: "Acné leve - Tetraciclina", estado: "Observada", fechaPrestacion: new Date("2025-09-22") },
        { observaciones: "Dolor menstrual - Ibuprofeno", estado: "Aprobada", fechaPrestacion: new Date("2025-09-23") },
        { observaciones: "Inflamación articular - Naproxeno", estado: "Pendiente", fechaPrestacion: new Date("2025-09-24") },
        { observaciones: "Tos productiva - Ambroxol", estado: "En analisis", fechaPrestacion: new Date("2025-09-25") },
        { observaciones: "Conjuntivitis - Colirio Antibiótico", estado: "Aprobada", fechaPrestacion: new Date("2025-09-26") },
        { observaciones: "Déficit de vitamina D - Ampollas", estado: "Observada", fechaPrestacion: new Date("2025-09-27") },
        { observaciones: "Anemia - Suplemento de Hierro", estado: "Aprobada", fechaPrestacion: new Date("2025-09-28") },
        { observaciones: "Infección urinaria - Trimetoprima-Sulfametoxazol", estado: "Rechazada", fechaPrestacion: new Date("2025-09-29") },
        { observaciones: "Ansiedad - Clonazepam", estado: "En analisis", fechaPrestacion: new Date("2025-09-30") },

        { observaciones: "Dolor lumbar - Ibuprofeno", estado: "Aprobada", fechaPrestacion: new Date("2025-10-01") },
        { observaciones: "Herida infectada - Mupirocina", estado: "Pendiente", fechaPrestacion: new Date("2025-10-02") },
        { observaciones: "Infección infantil - Amoxicilina suspensión", estado: "Aprobada", fechaPrestacion: new Date("2025-10-03") },
        { observaciones: "Control glucémico - Metformina", estado: "En analisis", fechaPrestacion: new Date("2025-10-04") },
        { observaciones: "Hipertensión - Losartán", estado: "Observada", fechaPrestacion: new Date("2025-10-05") },
        { observaciones: "Psoriasis leve - Hidrocortisona", estado: "Aprobada", fechaPrestacion: new Date("2025-10-06") },
        { observaciones: "Infección respiratoria - Amoxicilina", estado: "Pendiente", fechaPrestacion: new Date("2025-10-07") },
        { observaciones: "Fiebre infantil - Paracetamol Jarabe", estado: "Aprobada", fechaPrestacion: new Date("2025-10-08") },
        { observaciones: "Dermatitis combinada - Clotrimazol + Betametasona", estado: "En analisis", fechaPrestacion: new Date("2025-10-09") },
        { observaciones: "Infección bacteriana - Claritromicina", estado: "Rechazada", fechaPrestacion: new Date("2025-10-10") },

        { observaciones: "Dolor articular - Diclofenac", estado: "Aprobada", fechaPrestacion: new Date("2025-10-11") },
        { observaciones: "Congestión nasal - Oximetazolina", estado: "Observada", fechaPrestacion: new Date("2025-10-12") },
        { observaciones: "Herida desinfectante - Clorhexidina", estado: "Pendiente", fechaPrestacion: new Date("2025-10-13") },
        { observaciones: "Dolor agudo - Ibuprofeno", estado: "Aprobada", fechaPrestacion: new Date("2025-10-14") },
        { observaciones: "Tos seca - Dextrometorfano", estado: "En analisis", fechaPrestacion: new Date("2025-10-15") },
        { observaciones: "Infección cutánea - Clindamicina", estado: "Aprobada", fechaPrestacion: new Date("2025-10-16") },
        { observaciones: "Deficiencia de Magnesio - Suplemento", estado: "Pendiente", fechaPrestacion: new Date("2025-10-17") },
        { observaciones: "Piel seca - Crema con Urea", estado: "Observada", fechaPrestacion: new Date("2025-10-18") },
        { observaciones: "Dolor postquirúrgico - Tramadol", estado: "Aprobada", fechaPrestacion: new Date("2025-10-19") },
        { observaciones: "Dolor intenso - Ketorolac", estado: "Rechazada", fechaPrestacion: new Date("2025-10-20") },

        { observaciones: "Dolor de cabeza - Ibuprofeno", estado: "Pendiente", fechaPrestacion: new Date("2025-10-21") },
        { observaciones: "Infección respiratoria - Amoxicilina", estado: "Aprobada", fechaPrestacion: new Date("2025-10-22") },
        { observaciones: "Fiebre leve - Paracetamol", estado: "En analisis", fechaPrestacion: new Date("2025-10-23") },
        { observaciones: "Dolor muscular - Diclofenac", estado: "Observada", fechaPrestacion: new Date("2025-10-24") },
        { observaciones: "Bronquitis - Salbutamol inhalador", estado: "Aprobada", fechaPrestacion: new Date("2025-10-25") },
        { observaciones: "Acidez estomacal - Omeprazol", estado: "Pendiente", fechaPrestacion: new Date("2025-10-26") },
        { observaciones: "Ansiedad leve - Clonazepam", estado: "En analisis", fechaPrestacion: new Date("2025-10-27") },
        { observaciones: "Control glucémico - Metformina", estado: "Aprobada", fechaPrestacion: new Date("2025-10-28") },
        { observaciones: "Infección respiratoria - Azitromicina", estado: "Observada", fechaPrestacion: new Date("2025-10-29") },
        { observaciones: "Inflamación y alergia - Betametasona", estado: "Rechazada", fechaPrestacion: new Date("2025-10-30") },

        { observaciones: "Alergia crónica - Cetirizina", estado: "Aprobada", fechaPrestacion: new Date("2025-10-31") },
        { observaciones: "Acidez estomacal - Ranitidina", estado: "Pendiente", fechaPrestacion: new Date("2025-11-01") },
        { observaciones: "Dolor agudo - Ketorolac", estado: "En analisis", fechaPrestacion: new Date("2025-11-02") },
        { observaciones: "Dolor infantil - Ibuprofeno jarabe", estado: "Aprobada", fechaPrestacion: new Date("2025-11-03") },
        { observaciones: "Fiebre leve - Paracetamol", estado: "Observada", fechaPrestacion: new Date("2025-11-04") },
        { observaciones: "Infección bacteriana - Amoxicilina cápsulas", estado: "Aprobada", fechaPrestacion: new Date("2025-11-05") },
        { observaciones: "Asma persistente - Salbutamol inhalador", estado: "En analisis", fechaPrestacion: new Date("2025-11-06") },
        { observaciones: "Reflujo gástrico - Omeprazol cápsulas", estado: "Pendiente", fechaPrestacion: new Date("2025-11-07") },
        { observaciones: "Dolor articular - Ibuprofeno", estado: "Aprobada", fechaPrestacion: new Date("2025-11-08") },
        { observaciones: "Alergia crónica - Cetirizina", estado: "Rechazada", fechaPrestacion: new Date("2025-11-09") },

        { observaciones: "Dolor articular - Diclofenac", estado: "Aprobada", fechaPrestacion: new Date("2025-11-10") },
        { observaciones: "Infección respiratoria - Metformina", estado: "Observada", fechaPrestacion: new Date("2025-11-11") },
        { observaciones: "Dolor de cabeza - Ibuprofeno", estado: "Pendiente", fechaPrestacion: new Date("2025-11-12") },
        { observaciones: "Bronquitis - Azitromicina", estado: "Aprobada", fechaPrestacion: new Date("2025-11-13") },
        { observaciones: "Dolor agudo - Ketorolac", estado: "En analisis", fechaPrestacion: new Date("2025-11-14") },
        { observaciones: "Asma leve - Salbutamol", estado: "Aprobada", fechaPrestacion: new Date("2025-11-15") },
        { observaciones: "Infección cutánea - Betametasona", estado: "Observada", fechaPrestacion: new Date("2025-11-16") },
        { observaciones: "Alergia estacional - Cetirizina", estado: "Pendiente", fechaPrestacion: new Date("2025-11-17") },
        { observaciones: "Dolor lumbar - Ibuprofeno", estado: "Aprobada", fechaPrestacion: new Date("2025-11-18") },
        { observaciones: "Reflujo gástrico - Omeprazol", estado: "Rechazada", fechaPrestacion: new Date("2025-11-19") },

        { observaciones: "Dolor moderado - Diclofenac", estado: "Aprobada", fechaPrestacion: new Date("2025-11-20") },
        { observaciones: "Control glucémico - Metformina", estado: "En analisis", fechaPrestacion: new Date("2025-11-21") },
        { observaciones: "Dolor articular - Ibuprofeno", estado: "Pendiente", fechaPrestacion: new Date("2025-11-22") },
        { observaciones: "Infección respiratoria - Azitromicina", estado: "Aprobada", fechaPrestacion: new Date("2025-11-23") },
        { observaciones: "Dolor intenso - Ketorolac", estado: "Observada", fechaPrestacion: new Date("2025-11-24") },
        { observaciones: "Alergia leve - Cetirizina", estado: "Aprobada", fechaPrestacion: new Date("2025-11-25") },
        { observaciones: "Dolor postquirúrgico - Tramadol", estado: "Pendiente", fechaPrestacion: new Date("2025-11-26") },
        { observaciones: "Asma persistente - Salbutamol", estado: "Aprobada", fechaPrestacion: new Date("2025-11-27") },
        { observaciones: "Infección cutánea - Clindamicina", estado: "En analisis", fechaPrestacion: new Date("2025-11-28") },
        { observaciones: "Deficiencia de Magnesio - Suplemento", estado: "Observada", fechaPrestacion: new Date("2025-11-29") },
        { observaciones: "Piel seca - Crema con Urea", estado: "Aprobada", fechaPrestacion: new Date("2025-11-30") },

        { observaciones: "Dolor articular - Diclofenac", estado: "Pendiente", fechaPrestacion: new Date("2025-12-01") },
        { observaciones: "Infección respiratoria - Amoxicilina", estado: "Aprobada", fechaPrestacion: new Date("2025-12-02") },
        { observaciones: "Fiebre leve - Paracetamol", estado: "En analisis", fechaPrestacion: new Date("2025-12-03") },
        { observaciones: "Dolor lumbar - Ibuprofeno", estado: "Observada", fechaPrestacion: new Date("2025-12-04") },
        { observaciones: "Reflujo gástrico - Omeprazol", estado: "Aprobada", fechaPrestacion: new Date("2025-12-05") },
        { observaciones: "Ansiedad leve - Clonazepam", estado: "Pendiente", fechaPrestacion: new Date("2025-12-06") },
        { observaciones: "Dolor postquirúrgico - Tramadol", estado: "En analisis", fechaPrestacion: new Date("2025-12-07") },
        { observaciones: "Bronquitis - Salbutamol", estado: "Aprobada", fechaPrestacion: new Date("2025-12-08") },
        { observaciones: "Dolor agudo - Ketorolac", estado: "Observada", fechaPrestacion: new Date("2025-12-09") },

    ].map((r) => {

        let prestador = prestadores[rand(0, prestadores.length - 1)]
        let paciente = pacientes[rand(0, pacientes.length - 1)]

        return {
            ...r,
            prestadorId: r.estado !== "Pendiente" ? prestador._id : null,
            pacienteId: paciente._id,
            tipo: 'Receta',
        }
    });
    console.log(recetas.length)
    // 💸 5 de tipo Reintegro
    const reintegros = [
        {
            fechaPrestacion: new Date('2025-09-01'),
            observaciones: 'Reintegro por sesión de fisioterapia',
            estado: 'Aprobada',
            especialidad: 'Kinesiología',
            lugar: 'Centro Kinesiológico del Oeste'
        },
        {
            fechaPrestacion: new Date('2025-09-02'),
            observaciones: 'Reintegro por compra de gotas oftálmicas',
            estado: 'Pendiente',
            especialidad: 'Oftalmología',
            lugar: 'Farmacia Belgrano'
        },
        {
            fechaPrestacion: new Date('2025-09-03'),
            observaciones: 'Reintegro por análisis de sangre',
            estado: 'En analisis',
            especialidad: 'Laboratorio',
            lugar: 'Laboratorio Rossi'
        },
        {
            fechaPrestacion: new Date('2025-09-04'),
            observaciones: 'Reintegro por estudio radiológico de rodilla',
            estado: 'Aprobada',
            especialidad: 'Radiología',
            lugar: 'Diagnóstico por Imágenes CABA'
        },
        {
            fechaPrestacion: new Date('2025-09-05'),
            observaciones: 'Reintegro por consulta dermatológica',
            estado: 'Observada',
            especialidad: 'Dermatología',
            lugar: 'Clínica Santa Cecilia'
        },
        {
            fechaPrestacion: new Date('2025-09-06'),
            observaciones: 'Reintegro por sesión de masoterapia',
            estado: 'Pendiente',
            especialidad: 'Kinesiología',
            lugar: 'Consultorio Kine+'
        },
        {
            fechaPrestacion: new Date('2025-09-07'),
            observaciones: 'Reintegro por compra de antibióticos',
            estado: 'Aprobada',
            especialidad: 'Clínica Médica',
            lugar: 'Farmacia Azul'
        },
        {
            fechaPrestacion: new Date('2025-09-08'),
            observaciones: 'Reintegro por consulta otorrinolaringológica',
            estado: 'En analisis',
            especialidad: 'Otorrinolaringología',
            lugar: 'Centro ORL Caballito'
        },
        {
            fechaPrestacion: new Date('2025-09-09'),
            observaciones: 'Reintegro por ecografía abdominal',
            estado: 'Rechazada',
            especialidad: 'Ecografía',
            lugar: 'Diagnóstico Norte'
        },
        {
            fechaPrestacion: new Date('2025-09-10'),
            observaciones: 'Reintegro por compra de medicación para alergias',
            estado: 'Observada',
            especialidad: 'Alergología',
            lugar: 'Farmacia Moderna'
        },

        {
            fechaPrestacion: new Date('2025-09-11'),
            observaciones: 'Reintegro por consulta cardiológica',
            estado: 'Aprobada',
            especialidad: 'Cardiología',
            lugar: 'Sanatorio Modelo'
        },
        {
            fechaPrestacion: new Date('2025-09-12'),
            observaciones: 'Reintegro por análisis de orina completo',
            estado: 'Pendiente',
            especialidad: 'Laboratorio',
            lugar: 'Hospital Vélez Sarsfield'
        },
        {
            fechaPrestacion: new Date('2025-09-13'),
            observaciones: 'Reintegro por estudio de audición',
            estado: 'En analisis',
            especialidad: 'Otorrinolaringología',
            lugar: 'Centro Auditivo Palermo'
        },
        {
            fechaPrestacion: new Date('2025-09-14'),
            observaciones: 'Reintegro por placas de codo',
            estado: 'Aprobada',
            especialidad: 'Radiología',
            lugar: 'Consultorios Médicos San Martín'
        },
        {
            fechaPrestacion: new Date('2025-09-15'),
            observaciones: 'Reintegro por compra de crema dermatológica',
            estado: 'Observada',
            especialidad: 'Dermatología',
            lugar: 'Farmacia Popular'
        },
        {
            fechaPrestacion: new Date('2025-09-16'),
            observaciones: 'Reintegro por consulta de nutrición',
            estado: 'Pendiente',
            especialidad: 'Nutrición',
            lugar: 'Centro Integral de Salud'
        },
        {
            fechaPrestacion: new Date('2025-09-17'),
            observaciones: 'Reintegro por sesión de rehabilitación motora',
            estado: 'Aprobada',
            especialidad: 'Kinesiología',
            lugar: 'KineLife Ramos'
        },
        {
            fechaPrestacion: new Date('2025-09-18'),
            observaciones: 'Reintegro por lentes recetados',
            estado: 'Rechazada',
            especialidad: 'Oftalmología',
            lugar: 'Óptica Visión Plus'
        },
        {
            fechaPrestacion: new Date('2025-09-19'),
            observaciones: 'Reintegro por consulta ginecológica',
            estado: 'Aprobada',
            especialidad: 'Ginecología',
            lugar: 'Clínica del Sol'
        },
        {
            fechaPrestacion: new Date('2025-09-20'),
            observaciones: 'Reintegro por compra de suplementos vitamínicos',
            estado: 'Pendiente',
            especialidad: 'Clínica Médica',
            lugar: 'Farmacia Punto Salud'
        },

        {
            fechaPrestacion: new Date('2025-09-21'),
            observaciones: 'Reintegro por estudio de tiroides',
            estado: 'En analisis',
            especialidad: 'Endocrinología',
            lugar: 'Laboratorio Hidalgo'
        },
        {
            fechaPrestacion: new Date('2025-09-22'),
            observaciones: 'Reintegro por placas de tórax',
            estado: 'Aprobada',
            especialidad: 'Radiología',
            lugar: 'Centro Diagnóstico Sur'
        },
        {
            fechaPrestacion: new Date('2025-09-23'),
            observaciones: 'Reintegro por consulta psiquiátrica',
            estado: 'Observada',
            especialidad: 'Psiquiatría',
            lugar: 'Clínica del Parque'
        },
        {
            fechaPrestacion: new Date('2025-09-24'),
            observaciones: 'Reintegro por compra de medicación hormonal',
            estado: 'Pendiente',
            especialidad: 'Endocrinología',
            lugar: 'Farmacia Constitución'
        },
        {
            fechaPrestacion: new Date('2025-09-25'),
            observaciones: 'Reintegro por sesión de terapia respiratoria',
            estado: 'Aprobada',
            especialidad: 'Neumonología',
            lugar: 'Centro del Pulmón'
        },
        {
            fechaPrestacion: new Date('2025-09-26'),
            observaciones: 'Reintegro por consulta traumatológica',
            estado: 'Aprobada',
            especialidad: 'Traumatología',
            lugar: 'Sanatorio Rivera'
        },
        {
            fechaPrestacion: new Date('2025-09-27'),
            observaciones: 'Reintegro por ecocardiograma',
            estado: 'En analisis',
            especialidad: 'Cardiología',
            lugar: 'Diagnóstico Med-Heart'
        },
        {
            fechaPrestacion: new Date('2025-09-28'),
            observaciones: 'Reintegro por sesiones de psicoterapia',
            estado: 'Observada',
            especialidad: 'Psicología',
            lugar: 'Consultorios Palermo'
        },
        {
            fechaPrestacion: new Date('2025-09-29'),
            observaciones: 'Reintegro por análisis de vitamina D',
            estado: 'Pendiente',
            especialidad: 'Laboratorio',
            lugar: 'Laboratorio Suizo'
        },
        {
            fechaPrestacion: new Date('2025-09-30'),
            observaciones: 'Reintegro por compra de medicamentos pediátricos',
            estado: 'Aprobada',
            especialidad: 'Pediatría',
            lugar: 'Farmacia Central'
        },

        {
            fechaPrestacion: new Date('2025-10-01'),
            observaciones: 'Reintegro por TAC de cráneo',
            estado: 'Rechazada',
            especialidad: 'Tomografía',
            lugar: 'Centro Diagnóstico Belgrano'
        },
        {
            fechaPrestacion: new Date('2025-10-02'),
            observaciones: 'Reintegro por evaluación nutricional',
            estado: 'Aprobada',
            especialidad: 'Nutrición',
            lugar: 'Instituto de Salud Integral'
        },
        {
            fechaPrestacion: new Date('2025-10-03'),
            observaciones: 'Reintegro por análisis prenatales',
            estado: 'En analisis',
            especialidad: 'Ginecología',
            lugar: 'Clínica San José'
        },
        {
            fechaPrestacion: new Date('2025-10-04'),
            observaciones: 'Reintegro por consulta urológica',
            estado: 'Pendiente',
            especialidad: 'Urología',
            lugar: 'Hospital Italiano'
        },
        {
            fechaPrestacion: new Date('2025-10-05'),
            observaciones: 'Reintegro por resonancia magnética de columna',
            estado: 'Aprobada',
            especialidad: 'Resonancia',
            lugar: 'Diagnóstico Alto Palermo'
        },
        {
            fechaPrestacion: new Date('2025-10-06'),
            observaciones: 'Reintegro por compra de crema antiinflamatoria',
            estado: 'Observada',
            especialidad: 'Clínica Médica',
            lugar: 'Farmacia Belén'
        },
        {
            fechaPrestacion: new Date('2025-10-07'),
            observaciones: 'Reintegro por control oftalmológico anual',
            estado: 'Aprobada',
            especialidad: 'Oftalmología',
            lugar: 'Centro Visual Norte'
        },
        {
            fechaPrestacion: new Date('2025-10-08'),
            observaciones: 'Reintegro por examen audiométrico',
            estado: 'En analisis',
            especialidad: 'Otorrinolaringología',
            lugar: 'Centro Auditivo San Juan'
        },
        {
            fechaPrestacion: new Date('2025-10-09'),
            observaciones: 'Reintegro por consulta clínica general',
            estado: 'Pendiente',
            especialidad: 'Clínica Médica',
            lugar: 'Consultorios Médicos Flores'
        },
        {
            fechaPrestacion: new Date('2025-10-10'),
            observaciones: 'Reintegro por compra de analgésicos recetados',
            estado: 'Aprobada',
            especialidad: 'Clínica Médica',
            lugar: 'Farmacia Rivadavia'
        },

        {
            fechaPrestacion: new Date('2025-10-11'),
            observaciones: 'Reintegro por análisis de glucemia',
            estado: 'Rechazada',
            especialidad: 'Laboratorio',
            lugar: 'Laboratorio Integral Oeste'
        },
        {
            fechaPrestacion: new Date('2025-10-12'),
            observaciones: 'Reintegro por estudio de columna cervical',
            estado: 'Aprobada',
            especialidad: 'Radiología',
            lugar: 'Centro Diagnóstico Oeste'
        },
        {
            fechaPrestacion: new Date('2025-10-13'),
            observaciones: 'Reintegro por compra de gotas nasales',
            estado: 'Pendiente',
            especialidad: 'Otorrinolaringología',
            lugar: 'Farmacia Central Norte'
        },
        {
            fechaPrestacion: new Date('2025-10-14'),
            observaciones: 'Reintegro por consulta neurológica',
            estado: 'En analisis',
            especialidad: 'Neurología',
            lugar: 'Sanatorio Neuromed'
        },
        {
            fechaPrestacion: new Date('2025-10-15'),
            observaciones: 'Reintegro por estudio abdominal completo',
            estado: 'Aprobada',
            especialidad: 'Ecografía',
            lugar: 'Centro de Imágenes Diagnósticas'
        },
        {
        fechaPrestacion: new Date('2025-10-18'),
        observaciones: 'Reintegro por consulta dermatológica',
        estado: 'Pendiente',
        especialidad: 'Dermatología',
        lugar: 'Clínica Piel Sana'
    },
    {
        fechaPrestacion: new Date('2025-10-19'),
        observaciones: 'Reintegro por radiografía de tórax',
        estado: 'Aprobada',
        especialidad: 'Radiología',
        lugar: 'Centro Radiológico Norte'
    },
    {
        fechaPrestacion: new Date('2025-10-20'),
        observaciones: 'Reintegro por análisis de vitamina B12',
        estado: 'En analisis',
        especialidad: 'Laboratorio',
        lugar: 'Laboratorio Central Oeste'
    },
    {
        fechaPrestacion: new Date('2025-10-21'),
        observaciones: 'Reintegro por resonancia de columna cervical',
        estado: 'Observada',
        especialidad: 'Diagnóstico por Imágenes',
        lugar: 'Instituto de Resonancia Avellaneda'
    },
    {
        fechaPrestacion: new Date('2025-10-22'),
        observaciones: 'Reintegro por consulta nutricional',
        estado: 'Aprobada',
        especialidad: 'Nutrición',
        lugar: 'Consultorios NutriVida'
    },
    { fechaPrestacion: new Date('2025-10-23'), observaciones: 'Reintegro por consulta médica general', estado: 'Pendiente', especialidad: 'Medicina General', lugar: 'Centro Salud Vida' },
    { fechaPrestacion: new Date('2025-10-24'), observaciones: 'Reintegro por sesión de fisioterapia', estado: 'En analisis', especialidad: 'Fisioterapia', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-10-25'), observaciones: 'Reintegro por consulta odontológica', estado: 'Aprobada', especialidad: 'Odontología', lugar: 'Clínica Dental Sonrisas' },
    { fechaPrestacion: new Date('2025-10-26'), observaciones: 'Reintegro por consulta nutricional', estado: 'Rechazada', especialidad: 'Nutrición', lugar: 'Consultorios NutriVida' },
    { fechaPrestacion: new Date('2025-10-27'), observaciones: 'Reintegro por control pediátrico', estado: 'Observada', especialidad: 'Pediatría', lugar: 'Consultorios Pequeños Pasos' },
    { fechaPrestacion: new Date('2025-10-28'), observaciones: 'Reintegro por sesión de psicología', estado: 'Pendiente', especialidad: 'Psicología', lugar: 'Espacio Mental' },
    { fechaPrestacion: new Date('2025-10-29'), observaciones: 'Reintegro por consulta traumatológica', estado: 'Aprobada', especialidad: 'Traumatología', lugar: 'Clínica OrtoPlus' },
    { fechaPrestacion: new Date('2025-10-30'), observaciones: 'Reintegro por consulta dermatológica', estado: 'En analisis', especialidad: 'Dermatología', lugar: 'Dermacenter' },
    { fechaPrestacion: new Date('2025-10-31'), observaciones: 'Reintegro por control oftalmológico', estado: 'Aprobada', especialidad: 'Oftalmología', lugar: 'Clínica Visión' },
    { fechaPrestacion: new Date('2025-11-01'), observaciones: 'Reintegro por consulta de nutrición', estado: 'Pendiente', especialidad: 'Nutrición', lugar: 'Consultorios NutriVida' },
    { fechaPrestacion: new Date('2025-11-02'), observaciones: 'Reintegro por control ginecológico', estado: 'Observada', especialidad: 'Ginecología', lugar: 'Clínica FemVida' },
    { fechaPrestacion: new Date('2025-11-03'), observaciones: 'Reintegro por sesión de kinesiología', estado: 'Aprobada', especialidad: 'Kinesiología', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-11-04'), observaciones: 'Reintegro por consulta cardiológica', estado: 'Pendiente', especialidad: 'Cardiología', lugar: 'CardioCenter' },
    { fechaPrestacion: new Date('2025-11-05'), observaciones: 'Reintegro por control de hipertensión', estado: 'En analisis', especialidad: 'Medicina General', lugar: 'Centro Salud Vida' },
    { fechaPrestacion: new Date('2025-11-06'), observaciones: 'Reintegro por consulta reumatológica', estado: 'Aprobada', especialidad: 'Reumatología', lugar: 'Clínica OrtoPlus' },
    { fechaPrestacion: new Date('2025-11-07'), observaciones: 'Reintegro por control pediátrico', estado: 'Rechazada', especialidad: 'Pediatría', lugar: 'Consultorios Pequeños Pasos' },
    { fechaPrestacion: new Date('2025-11-08'), observaciones: 'Reintegro por consulta psicológica', estado: 'Observada', especialidad: 'Psicología', lugar: 'Espacio Mental' },
    { fechaPrestacion: new Date('2025-11-09'), observaciones: 'Reintegro por consulta traumatológica', estado: 'Pendiente', especialidad: 'Traumatología', lugar: 'Clínica OrtoPlus' },
    { fechaPrestacion: new Date('2025-11-10'), observaciones: 'Reintegro por sesión de fisioterapia', estado: 'Aprobada', especialidad: 'Fisioterapia', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-11-11'), observaciones: 'Reintegro por consulta dermatológica', estado: 'En analisis', especialidad: 'Dermatología', lugar: 'Dermacenter' },
    { fechaPrestacion: new Date('2025-11-12'), observaciones: 'Reintegro por control oftalmológico', estado: 'Aprobada', especialidad: 'Oftalmología', lugar: 'Clínica Visión' },
    { fechaPrestacion: new Date('2025-11-13'), observaciones: 'Reintegro por consulta de nutrición', estado: 'Pendiente', especialidad: 'Nutrición', lugar: 'Consultorios NutriVida' },
    { fechaPrestacion: new Date('2025-11-14'), observaciones: 'Reintegro por control ginecológico', estado: 'Observada', especialidad: 'Ginecología', lugar: 'Clínica FemVida' },
    { fechaPrestacion: new Date('2025-11-15'), observaciones: 'Reintegro por sesión de kinesiología', estado: 'Aprobada', especialidad: 'Kinesiología', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-11-16'), observaciones: 'Reintegro por consulta cardiológica', estado: 'Pendiente', especialidad: 'Cardiología', lugar: 'CardioCenter' },
    { fechaPrestacion: new Date('2025-11-17'), observaciones: 'Reintegro por consulta traumatológica', estado: 'En analisis', especialidad: 'Traumatología', lugar: 'Clínica OrtoPlus' },
    { fechaPrestacion: new Date('2025-11-18'), observaciones: 'Reintegro por sesión de fisioterapia', estado: 'Aprobada', especialidad: 'Fisioterapia', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-11-19'), observaciones: 'Reintegro por consulta odontológica', estado: 'Rechazada', especialidad: 'Odontología', lugar: 'Clínica Dental Sonrisas' },
    { fechaPrestacion: new Date('2025-11-20'), observaciones: 'Reintegro por control pediátrico', estado: 'Observada', especialidad: 'Pediatría', lugar: 'Consultorios Pequeños Pasos' },
    { fechaPrestacion: new Date('2025-11-21'), observaciones: 'Reintegro por consulta psicológica', estado: 'Pendiente', especialidad: 'Psicología', lugar: 'Espacio Mental' },
    { fechaPrestacion: new Date('2025-11-22'), observaciones: 'Reintegro por consulta dermatológica', estado: 'Aprobada', especialidad: 'Dermatología', lugar: 'Dermacenter' },
    { fechaPrestacion: new Date('2025-11-23'), observaciones: 'Reintegro por control oftalmológico', estado: 'En analisis', especialidad: 'Oftalmología', lugar: 'Clínica Visión' },
    { fechaPrestacion: new Date('2025-11-24'), observaciones: 'Reintegro por consulta de nutrición', estado: 'Aprobada', especialidad: 'Nutrición', lugar: 'Consultorios NutriVida' },
    { fechaPrestacion: new Date('2025-11-25'), observaciones: 'Reintegro por consulta ginecológica', estado: 'Pendiente', especialidad: 'Ginecología', lugar: 'Clínica FemVida' },
    { fechaPrestacion: new Date('2025-11-26'), observaciones: 'Reintegro por sesión de kinesiología', estado: 'Observada', especialidad: 'Kinesiología', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-11-27'), observaciones: 'Reintegro por consulta cardiológica', estado: 'Aprobada', especialidad: 'Cardiología', lugar: 'CardioCenter' },
    { fechaPrestacion: new Date('2025-11-28'), observaciones: 'Reintegro por consulta traumatológica', estado: 'Pendiente', especialidad: 'Traumatología', lugar: 'Clínica OrtoPlus' },
    { fechaPrestacion: new Date('2025-11-29'), observaciones: 'Reintegro por sesión de fisioterapia', estado: 'En analisis', especialidad: 'Fisioterapia', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-11-30'), observaciones: 'Reintegro por consulta odontológica', estado: 'Aprobada', especialidad: 'Odontología', lugar: 'Clínica Dental Sonrisas' },
    { fechaPrestacion: new Date('2025-12-01'), observaciones: 'Reintegro por consulta pediátrica', estado: 'Rechazada', especialidad: 'Pediatría', lugar: 'Consultorios Pequeños Pasos' },
    { fechaPrestacion: new Date('2025-12-02'), observaciones: 'Reintegro por consulta psicológica', estado: 'Observada', especialidad: 'Psicología', lugar: 'Espacio Mental' },
    { fechaPrestacion: new Date('2025-12-03'), observaciones: 'Reintegro por consulta dermatológica', estado: 'Pendiente', especialidad: 'Dermatología', lugar: 'Dermacenter' },
    { fechaPrestacion: new Date('2025-12-04'), observaciones: 'Reintegro por control oftalmológico', estado: 'Aprobada', especialidad: 'Oftalmología', lugar: 'Clínica Visión' },
    { fechaPrestacion: new Date('2025-12-05'), observaciones: 'Reintegro por consulta nutricional', estado: 'En analisis', especialidad: 'Nutrición', lugar: 'Consultorios NutriVida' },
    { fechaPrestacion: new Date('2025-12-06'), observaciones: 'Reintegro por consulta ginecológica', estado: 'Aprobada', especialidad: 'Ginecología', lugar: 'Clínica FemVida' },
    { fechaPrestacion: new Date('2025-12-07'), observaciones: 'Reintegro por sesión de kinesiología', estado: 'Pendiente', especialidad: 'Kinesiología', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-12-08'), observaciones: 'Reintegro por consulta cardiológica', estado: 'Observada', especialidad: 'Cardiología', lugar: 'CardioCenter' },
    { fechaPrestacion: new Date('2025-12-09'), observaciones: 'Reintegro por consulta traumatológica', estado: 'Aprobada', especialidad: 'Traumatología', lugar: 'Clínica OrtoPlus' },
    { fechaPrestacion: new Date('2025-12-10'), observaciones: 'Reintegro por sesión de fisioterapia', estado: 'En analisis', especialidad: 'Fisioterapia', lugar: 'FisioCenter' },
    { fechaPrestacion: new Date('2025-12-11'), observaciones: 'Reintegro por consulta odontológica', estado: 'Aprobada', especialidad: 'Odontología', lugar: 'Clínica Dental Sonrisas' }
    ].map((r) => {

        let prestador = prestadores[rand(0, prestadores.length - 1)]
        let paciente = pacientes[rand(0, pacientes.length - 1)]

        return {
            ...r,
            prestadorId: r.estado !== "Pendiente" ? prestador._id : null,
            pacienteId: paciente._id,
            medico: r.estado !== "Pendiente" ? prestador.nombre : null,
            tipo: 'Reintegro',
        }
    });
    console.log(reintegros.length)
    // 🩺 5 de tipo Autorizacion
    const autorizaciones = [
        { fechaPrestacion: new Date('2025-09-01'), observaciones: 'Autorización para resonancia magnética lumbar', estado: 'En analisis', especialidad: 'Diagnóstico por Imágenes', lugar: 'Hospital Italiano' },
        { fechaPrestacion: new Date('2025-09-02'), observaciones: 'Autorización para ecografía abdominal', estado: 'Pendiente', especialidad: 'Ecografía', lugar: 'Clínica del Sol' },
        { fechaPrestacion: new Date('2025-09-03'), observaciones: 'Autorización para tomografía computada de cráneo', estado: 'Aprobada', especialidad: 'Diagnóstico por Imágenes', lugar: 'Centro Médico Norte' },
        { fechaPrestacion: new Date('2025-09-04'), observaciones: 'Autorización para estudios cardiológicos completos', estado: 'Aprobada', especialidad: 'Cardiología', lugar: 'Instituto Cardiológico Argentino' },
        { fechaPrestacion: new Date('2025-09-05'), observaciones: 'Autorización para análisis hormonales ampliados', estado: 'Observada', especialidad: 'Laboratorio', lugar: 'Laboratorio Central' },

        { fechaPrestacion: new Date('2025-09-06'), observaciones: 'Autorización para mamografía bilateral', estado: 'Pendiente', especialidad: 'Diagnóstico por Imágenes', lugar: 'Clínica Favaloro' },
        { fechaPrestacion: new Date('2025-09-07'), observaciones: 'Autorización para radiografía de tórax', estado: 'Rechazada', especialidad: 'Radiología', lugar: 'Hospital Fernández' },
        { fechaPrestacion: new Date('2025-09-08'), observaciones: 'Autorización para ecocardiograma Doppler', estado: 'Aprobada', especialidad: 'Cardiología', lugar: 'Centro de Cardiología' },
        { fechaPrestacion: new Date('2025-09-09'), observaciones: 'Autorización para punción biopsia', estado: 'En analisis', especialidad: 'Anatomía Patológica', lugar: 'Instituto de Patología' },
        { fechaPrestacion: new Date('2025-09-10'), observaciones: 'Autorización para control dermatológico', estado: 'Pendiente', especialidad: 'Dermatología', lugar: 'Centro Médico Cabildo' },

        { fechaPrestacion: new Date('2025-09-11'), observaciones: 'Autorización para polisomnografía', estado: 'Aprobada', especialidad: 'Neumonología', lugar: 'Sanatorio Los Arcos' },
        { fechaPrestacion: new Date('2025-09-12'), observaciones: 'Autorización para consulta neurológica', estado: 'Aprobada', especialidad: 'Neurología', lugar: 'Instituto Neurológico Argentino' },
        { fechaPrestacion: new Date('2025-09-13'), observaciones: 'Autorización para análisis de hemoglobina glicosilada', estado: 'Observada', especialidad: 'Laboratorio', lugar: 'Laboratorio de Análisis Clínicos Norte' },
        { fechaPrestacion: new Date('2025-09-14'), observaciones: 'Autorización para radiografía de cadera', estado: 'Pendiente', especialidad: 'Radiología', lugar: 'Clínica Sagrada Familia' },
        { fechaPrestacion: new Date('2025-09-15'), observaciones: 'Autorización para tomografía de abdomen', estado: 'En analisis', especialidad: 'Diagnóstico por Imágenes', lugar: 'Hospital Italiano' },

        { fechaPrestacion: new Date('2025-09-16'), observaciones: 'Autorización para estudios de tiroides', estado: 'Rechazada', especialidad: 'Endocrinología', lugar: 'Centro Médico Norte' },
        { fechaPrestacion: new Date('2025-09-17'), observaciones: 'Autorización para ecografía renal', estado: 'Aprobada', especialidad: 'Ecografía', lugar: 'Sanatorio Anchorena' },
        { fechaPrestacion: new Date('2025-09-18'), observaciones: 'Autorización para examen oftalmológico completo', estado: 'Pendiente', especialidad: 'Oftalmología', lugar: 'Centro de Oftalmología' },
        { fechaPrestacion: new Date('2025-09-19'), observaciones: 'Autorización para audiometría', estado: 'Aprobada', especialidad: 'Otorrinolaringología', lugar: 'Clínica del Oído y la Voz' },
        { fechaPrestacion: new Date('2025-09-20'), observaciones: 'Autorización para laboratorio general', estado: 'Observada', especialidad: 'Laboratorio', lugar: 'Laboratorio Central' },

        { fechaPrestacion: new Date('2025-09-21'), observaciones: 'Autorización para resonancia de rodilla', estado: 'Aprobada', especialidad: 'Diagnóstico por Imágenes', lugar: 'Centro Médico Belgrano' },
        { fechaPrestacion: new Date('2025-09-22'), observaciones: 'Autorización para control cardiológico', estado: 'Pendiente', especialidad: 'Cardiología', lugar: 'Instituto Cardiológico Argentino' },
        { fechaPrestacion: new Date('2025-09-23'), observaciones: 'Autorización para consulta traumatológica', estado: 'En analisis', especialidad: 'Traumatología', lugar: 'Clínica San Jorge' },
        { fechaPrestacion: new Date('2025-09-24'), observaciones: 'Autorización para ecografía obstétrica', estado: 'Aprobada', especialidad: 'Obstetricia', lugar: 'Centro Materno Infantil' },
        { fechaPrestacion: new Date('2025-09-25'), observaciones: 'Autorización para electrocardiograma', estado: 'Aprobada', especialidad: 'Cardiología', lugar: 'Hospital Fernández' },

        { fechaPrestacion: new Date('2025-09-26'), observaciones: 'Autorización para analítica de vitamina D', estado: 'Rechazada', especialidad: 'Laboratorio', lugar: 'Laboratorio CEMIC' },
        { fechaPrestacion: new Date('2025-09-27'), observaciones: 'Autorización para control ginecológico', estado: 'Observada', especialidad: 'Ginecología', lugar: 'Clínica Santa Isabel' },
        { fechaPrestacion: new Date('2025-09-28'), observaciones: 'Autorización para TAC contrastada', estado: 'Aprobada', especialidad: 'Diagnóstico por Imágenes', lugar: 'Diagnóstico Maipú' },
        { fechaPrestacion: new Date('2025-09-29'), observaciones: 'Autorización para endoscopía digestiva', estado: 'Pendiente', especialidad: 'Gastroenterología', lugar: 'Instituto Digestivo' },
        { fechaPrestacion: new Date('2025-09-30'), observaciones: 'Autorización para laboratorio clínico completo', estado: 'Aprobada', especialidad: 'Laboratorio', lugar: 'Laboratorio Central' },

        // Octubre (20 más)
        { fechaPrestacion: new Date('2025-10-01'), observaciones: 'Autorización para radiografía panorámica dental', estado: 'En analisis', especialidad: 'Odontología', lugar: 'Clínica Dental Norte' },
        { fechaPrestacion: new Date('2025-10-02'), observaciones: 'Autorización para ecografía mamaria', estado: 'Pendiente', especialidad: 'Ecografía', lugar: 'Clínica Favaloro' },
        { fechaPrestacion: new Date('2025-10-03'), observaciones: 'Autorización para resonancia de columna cervical', estado: 'Aprobada', especialidad: 'Diagnóstico por Imágenes', lugar: 'Hospital Italiano' },
        { fechaPrestacion: new Date('2025-10-04'), observaciones: 'Autorización para consulta endocrinológica', estado: 'Aprobada', especialidad: 'Endocrinología', lugar: 'Centro Médico Norte' },
        { fechaPrestacion: new Date('2025-10-05'), observaciones: 'Autorización para estudios hematológicos', estado: 'Observada', especialidad: 'Laboratorio', lugar: 'Laboratorio Central' },

        { fechaPrestacion: new Date('2025-10-06'), observaciones: 'Autorización para doppler venoso', estado: 'Pendiente', especialidad: 'Angiología', lugar: 'Instituto de Flebolinfología' },
        { fechaPrestacion: new Date('2025-10-07'), observaciones: 'Autorización para consulta psiquiátrica', estado: 'Rechazada', especialidad: 'Psiquiatría', lugar: 'Clínica de Salud Mental Norte' },
        { fechaPrestacion: new Date('2025-10-08'), observaciones: 'Autorización para prueba de esfuerzo', estado: 'Aprobada', especialidad: 'Cardiología', lugar: 'Centro de Cardiología' },
        { fechaPrestacion: new Date('2025-10-09'), observaciones: 'Autorización para TAC de tórax', estado: 'En analisis', especialidad: 'Diagnóstico por Imágenes', lugar: 'Diagnóstico Maipú' },
        { fechaPrestacion: new Date('2025-10-10'), observaciones: 'Autorización para estudios de fertilidad', estado: 'Pendiente', especialidad: 'Ginecología', lugar: 'Centro Materno Infantil' },

        { fechaPrestacion: new Date('2025-10-11'), observaciones: 'Autorización para radiografía de columna', estado: 'Aprobada', especialidad: 'Radiología', lugar: 'Clínica San Jorge' },
        { fechaPrestacion: new Date('2025-10-12'), observaciones: 'Autorización para ecografía de tiroides', estado: 'Aprobada', especialidad: 'Ecografía', lugar: 'Sanatorio Anchorena' },
        { fechaPrestacion: new Date('2025-10-13'), observaciones: 'Autorización para encefalograma', estado: 'Observada', especialidad: 'Neurología', lugar: 'Instituto Neurológico Argentino' },
        { fechaPrestacion: new Date('2025-10-14'), observaciones: 'Autorización para consulta otorrinolaringológica', estado: 'Pendiente', especialidad: 'Otorrinolaringología', lugar: 'Clínica del Oído y la Voz' },
        { fechaPrestacion: new Date('2025-10-15'), observaciones: 'Autorización para control de embarazo', estado: 'En analisis', especialidad: 'Obstetricia', lugar: 'Centro Materno Infantil' },

        { fechaPrestacion: new Date('2025-10-16'), observaciones: 'Autorización para doppler cardíaco', estado: 'Rechazada', especialidad: 'Cardiología', lugar: 'Instituto Cardiológico Argentino' },
        { fechaPrestacion: new Date('2025-10-17'), observaciones: 'Autorización para audiometría tonal', estado: 'Aprobada', especialidad: 'Otorrinolaringología', lugar: 'Clínica del Oído y la Voz' },
        { fechaPrestacion: new Date('2025-10-18'), observaciones: 'Autorización para laboratorio metabólico', estado: 'Pendiente', especialidad: 'Laboratorio', lugar: 'Laboratorio de Análisis Clínicos Norte' },
        { fechaPrestacion: new Date('2025-10-19'), observaciones: 'Autorización para resonancia de hombro', estado: 'Aprobada', especialidad: 'Diagnóstico por Imágenes', lugar: 'Diagnóstico Maipú' },
        { fechaPrestacion: new Date('2025-10-20'), observaciones: 'Autorización para consulta clínica general', estado: 'Observada', especialidad: 'Clínica Médica', lugar: 'Hospital Fernández' }
    ].map((r) => {

        let prestador = prestadores[rand(0, prestadores.length - 1)]
        let paciente = pacientes[rand(0, pacientes.length - 1)]

        return {
            ...r,
            prestadorId: r.estado !== "Pendiente" ? prestador._id : null,
            pacienteId: paciente._id,
            medico: r.estado !== "Pendiente" ? prestador.nombre : null,
            tipo: 'Autorizacion',
        }
    });

    solicitudes.push(...recetas, ...reintegros, ...autorizaciones);

    try {
        await Solicitud.deleteMany({});
        await Solicitud.insertMany(solicitudes);
        console.log(`✅ ${solicitudes.length} solicitudes insertadas`);
    } catch (error) {
        console.error('❌ Error al insertar las solicitudes:', error.message);
    }
}

module.exports = { seedSolicitudes };