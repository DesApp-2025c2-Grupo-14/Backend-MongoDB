const {Paciente}= require ('../models/paciente')
const {SituacionTerapeutica}= require ('../models/situacionTerapeutica')


const obtenerPacientes = async (req,res) => {
  try{
    const pacientes = await Paciente.find().select('nommbre')
    res.status(200).json(pacientes)
  } catch (error){
    console.log(error)
    res.status(500).json({error:'Error interno del servidor'})
  }
}



const crearNuevaSituacionTerapeutica = async (req, res) => {
  try {
    const nAfiliado = req.params.nAfiliado
    const { titulo,fechaInicio,fechaFinal,descripcion,} = req.body
    const paciente = await Paciente.findOne({ nroAfiliado: nAfiliado })
    const pacienteId = paciente._id.toString()
    const nuevaSituacion = new SituacionTerapeutica({
      titulo: titulo,
      fechaInicio: fechaInicio,
      fechaFinal: fechaFinal,
      descripcion: descripcion,
      pacienteId: pacienteId
    })
    await nuevaSituacion.save()
    res.status(201).json(nuevaSituacion)
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error al crear la publicación' })
  }
}

module.exports = {obtenerPacientes,crearNuevaSituacionTerapeutica}