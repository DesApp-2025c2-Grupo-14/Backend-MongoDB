const Solicitud = require ("../models/solicitud")
const mongoose = require("mongoose")
const obtenerSolicitudesPendientes = async (req,res) => {
  try {
    const solicitudes = await Solicitud.aggregate(
      [
        {
          $match: {
            $expr: { $eq: ["$estado", "Pendiente"] }
          }
        },
        {
          $lookup: {
            from: 'pacientes',
            localField: 'pacienteId',
            foreignField: '_id',
            as: 'paciente'
          }
        },
        {
          $unwind: '$paciente'
        },
        {
          $project: {
            'paciente._id': 0,
            'paciente.edad': 0,
            'paciente.nroAfiliado': 0,
            'paciente.situacionesTerapeuticas': 0,
            'paciente.familia': 0,
            'paciente.historialClinico': 0
          }
        }
      ]
    )
    // const solicitudes = Solicitud.find().select('fechaPrestacion medico especialidad observaciones estado');
    if (!solicitudes)
      return res.status(404).json({ message: 'Solicitudes no encontradas.' })
    res.status(200).json(solicitudes)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
  
}

const getDetalleById = async (req, res) => {
  const _id = new mongoose.Types.ObjectId(req.params.id);
  const tipo = req.params.tipo === 'Reintegro' ? 
                'reintegros' : 
              req.params.tipo === 'Autorizacion' ?
                'autorizaciones' :
                'recetas'
  const alias = tipo === 'reintegros' ? 'reintegro' : tipo === 'autorizaciones' ? 'autorizacion' : 'receta'
  try {
    const detalle = await Solicitud.aggregate([
      {
        $match: { _id },
      },
      {
        $lookup: {
          from: tipo,
          localField: "_id",
          foreignField: "solicitudId",
          as: alias,
        }
      },
      { $unwind: { path: `$${alias}`} },
      {
          $lookup: {
            from: 'pacientes',
            localField: 'pacienteId',
            foreignField: '_id',
            as: 'paciente'
          }
        },
        {
          $unwind: '$paciente'
        },
        {
          $project: {
            'paciente._id': 0,
            'paciente.edad': 0,
            'paciente.nroAfiliado': 0,
            'paciente.situacionesTerapeuticas': 0,
            'paciente.familia': 0,
            'paciente.historialClinico': 0,
            'solicitud.pacienteId': 0
          }
        }
    ]);

    if (!detalle) 
      return res.status(404).json({ message: 'Detalle no encontrado.' })
    res.status(200).json(detalle[0])
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
}

const analizarSolicitud = async (req, res) => {
  try {
    
    const solicitud = await Solicitud.findByIdAndUpdate({_id: req.params.id}, {estado: 'En analisis', prestadorId: req.body.prestadorId}, {new: true})
    res.status(200).json(solicitud)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
}

module.exports = {obtenerSolicitudesPendientes, getDetalleById, analizarSolicitud}