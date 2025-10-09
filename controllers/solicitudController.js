const Solicitud = require ("../models/solicitud")

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
          $unwind: '$paciente' // 👈 convierte el array en objeto
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
    if (!solicitudes) {
      return res.status(404).json({ message: 'Solicitudes no encontradas' })
    }
    res.status(200).json(solicitudes)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' })
  }
  
}

const getDetalleSolicitud = async (req, res) => {
  const id = req.params.id
  const _id = new mongoose.Types.ObjectId(req.params.id);
    const productos = await Producto.aggregate([
    {
      $match: { _id },
    },
    {
      $lookup: {
        from: "fabricantes",
        localField: "_id",
        foreignField: "productosId",
        as: "fabricantes",
      },
    },
    {
      $project: {
        _id: 0,
        "fabricantes._id": 1,
        "fabricantes.nombre": 1,
        "fabricantes.direccion": 1,
        "fabricantes.numeroContacto": 1,
        "fabricantes.pathImgPerfil":1
      },
    },
  ]);
}


module.exports = {obtenerSolicitudesPendientes}