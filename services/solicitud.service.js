const Solicitud = require ("../models/solicitud")
const mongoose = require("mongoose")
const dayjs = require("dayjs")

const fnSolicitudesPrestador = async ( idPrestador, tipoSolicitud, inicioRango, finRango) => {
    const tipo = tipoSolicitud === 'Reintegro' ? 
                'reintegros' : 
              tipoSolicitud === 'Autorizacion' ?
                'autorizaciones' :
                'recetas'
    const alias = tipo === 'reintegros' ? 'reintegro' : tipo === 'autorizaciones' ? 'autorizacion' : 'receta'

    const solicitudes = await Solicitud.aggregate([
      {
        $match: {
          prestadorId: new mongoose.Types.ObjectId(idPrestador),
          tipo: tipoSolicitud,
          fechaPrestacion: { $gte: dayjs(inicioRango).toDate(), $lte: dayjs(finRango).toDate() },
        }
      },
      {
        $lookup: {
          from: tipo,
          localField: "_id",
          foreignField: "solicitudId",
          as: alias,
        }
      },
      { $unwind: { path: `$${alias}`, preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "pacientes",
          localField: "pacienteId",
          foreignField: "_id",
          as: "paciente"
        }
      },
      { $unwind: { path: "$paciente", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          "paciente._id": 0,
          "paciente.edad": 0,
          "paciente.nroAfiliado": 0,
          "paciente.situacionesTerapeuticas": 0,
          "paciente.familia": 0,
          "paciente.historialClinico": 0,
          "paciente.tipoDocumento": 0,
          "paciente.dni": 0,
          "paciente.fechaNacimiento": 0,
          "paciente.telefono": 0,
          "paciente.mail": 0,
          "paciente.direccion": 0,
          "paciente.parentesco": 0,
          "paciente.planMedico": 0,
          "paciente.__v": 0
        }
      }
    ]);

    return solicitudes
}

const fnEstadisticasPrestador = async (idPrestador, tipoSolicitud, inicioRango, finRango) => {

  const resultado = await Solicitud.aggregate([
    {
      $match: {
        prestadorId: new mongoose.Types.ObjectId(idPrestador),
        tipo : tipoSolicitud,
        fechaPrestacion: { $gte: dayjs(inicioRango).toDate(), $lte: dayjs(finRango).toDate() },
      }
    },
    {
      $group: {
        _id: "$estado",
        total: { $sum: 1 }
      }
    }
  ]);
  const resumen = {
    total: resultado.reduce((acc, r) => acc + r.total, 0),
    aprobadas: resultado.find(r => r._id === "Aprobada")?.total || 0,
    rechazadas: resultado.find(r => r._id === "Rechazada")?.total || 0,
    observadas: resultado.find(r => r._id === "Observada")?.total || 0
  };

  return resumen
}

module.exports = { fnSolicitudesPrestador, fnEstadisticasPrestador }