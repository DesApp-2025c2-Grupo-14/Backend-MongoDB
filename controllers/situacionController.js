const SituacionTerapeutica = require ('../models/situacionTerapeutica')
const Paciente = require ("../models/paciente")

const crearNuevaSituacionTerapeutica = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const { titulo,fechaInicio,fechaFinal,descripcion,} = req.body
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado })
    const pacienteId = paciente._id.toString()
    const nuevaSituacion = new SituacionTerapeutica({
      titulo: titulo,
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal,
      descripcion: descripcion,
      paciente: pacienteId
    })
    await nuevaSituacion.save()
    res.status(201).json(j)
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear la publicación' })
  }
}

const obtenerSituacionTerapeutica = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado }).select('nombre -_id').populate('situacionesTerapeuticas', 'titulo')
    res.status(200).json(paciente)
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al obtener las situaciones terapeuticas' })
  }
}


const eliminarSituacion = async (req, res) => {
    try {
        const id = req.params.id
        const situacionEliminada = await Post.findByIdAndDelete(id)
        await Paciente.deleteMany({ situacionesTerapeuticas: id })
        res.status(200).json({ message: 'Situacion terapeutica eliminada exitosamente' })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar la situacion terapeutica' })
    }
}

const modificarFechaFinalizacion = async (req, res) => {
    const id = req.params.id
    const {titulo,fechaInicio,fechaFinal,descripcion} = req.body
    try {
        const situacionModificada = await SituacionTerapeutica.findByIdAndUpdate(id,{
            $set: {
              titulo:titulo,
              fechaInicio:fechaInicio,              
              fechaFinal: fechaFinal,
              descripcion:descripcion
            }
        },{
            new: true,
            runValidators: true
        })
        res.status(200).json(situacionModificada)
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Error al modificar fecha de finalizacion'})
    }
}

module.exports = {
  eliminarSituacion,
  modificarFechaFinalizacion,
  crearNuevaSituacionTerapeutica,
  obtenerSituacionTerapeutica
}