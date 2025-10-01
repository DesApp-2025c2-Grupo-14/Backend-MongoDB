const SituacionTerapeutica = require ('../models/situacionTerapeutica')
const Paciente = require ("../models/paciente")

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
  modificarFechaFinalizacion
}