const Paciente = require('../models/paciente');
const SituacionTerapeutica= require ('../models/situacionTerapeutica')

const crearPaciente = async (req, res) => {
  try {
    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al crear el paciente' });
  }
};

const obtenerPacientes = async (req,res) => {
  try{
    const listaPacientes = await Paciente.find().select('nombre');
    res.status(200).json(listaPacientes)
    if(!pacientes){
      return res.status(404).json({ message: 'Publicaciones no encontradas' })
    }
  } catch (error){
    console.log('Error en obtenerPacientes:', error)
    res.status(500).json({error:'Error interno del servidor'})
  }
}



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

const obtenerGrupoFamiliar = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado }).select('nombre -_id').populate('familia', 'nombre')
    res.status(200).json(paciente)
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al obtener el grupo familiar' })
  }
}

const obtenerHistoriasClinicas = async (req, res) => {
  try {
    const nroAfiliado = req.params.nAfiliado
    const paciente = await Paciente.findOne({ nroAfiliado: nroAfiliado }).select('nombre -_id').populate('historiasClinicas', 'nombre')
    res.status(200).json(paciente)
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al obtener el historial' })
  }
}

module.exports = {
  crearPaciente,
  obtenerPacientes,
  crearNuevaSituacionTerapeutica,
  obtenerSituacionTerapeutica,
  obtenerGrupoFamiliar,
  obtenerHistoriasClinicas
};