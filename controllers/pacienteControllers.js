const Paciente = require('../models/paciente');
const SituacionTerapeutica= require ('../models/situacionTerapeutica')


/* PACIENTES */
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

/* const obtenerPacientes = async (req,res) => {
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
 */
 

const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find({}, {
      dni: 1,
      telefono: 1,
      nroAfiliado: 1,
      nombre: 1,
      apellido: 1,
      parentesco: 1,
      fechaNacimiento: 1,
      planMedico:1,
      _id: 0
    });

    if (!pacientes || pacientes.length === 0) {
      return res.status(404).json({ message: 'No se encontraron pacientes' });
    }
    //esto es para que se envie la fecha de nacimiento en formato normal los recorro a todos y voy cambiando
    const pacientesFormateados = pacientes.map(paciente => {
      const fecha = new Date(paciente.fechaNacimiento);
      const dia = fecha.getDate().toString().padStart(2, '0');//padstart es para asegurar q todos los campos tengan el mismo formato osea 00/00/00
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear();
      //convierto paciente a objeto
      return {
        ...paciente.toObject(), 
        fechaNacimiento: `${dia}/${mes}/${anio}`
      };
    });

    res.status(200).json(pacientesFormateados);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


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



module.exports = {
  crearPaciente,
  obtenerPacientes,
  obtenerGrupoFamiliar
};