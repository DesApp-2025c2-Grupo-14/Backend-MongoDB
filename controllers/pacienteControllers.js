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
      _id: 1
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
    const id = req.params.id;
    console.log("ID recibido:", id);

    // Primero obtenemos el paciente
    const paciente = await Paciente.findById(id);

    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    // Obtenemos el prefijo del nroAfiliado como grupo
    const grupoId = paciente.nroAfiliado.split('-')[0];

    // Buscamos todos los miembros del mismo grupo
    const grupoFamiliar = await Paciente.find({
      nroAfiliado: { $regex: `^${grupoId}-` }
    });

    res.status(200).json(grupoFamiliar);
  } catch (error) {
    console.error("Error al obtener el grupo familiar:", error.message);
    res.status(500).json({ message: "Error del servidor al obtener el grupo familiar" });
  }
};
const obtenerPaciente = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID recibido:", id);
    console.log('Llegó GET paciente con id:', req.params.id);

    const paciente = await Paciente.findById(id);

    if (!paciente) {
      return res.status(404).json({ message: "El paciente no existe" });
    }

    res.status(200).json(paciente);
  } catch (error) {
    console.error("Error al obtener paciente:", error.message);
    res.status(500).json({ message: "Error del servidor al buscar el paciente" });
  }
};



const borrarPaciente = async (req, res) => {
  const id = req.params.id;
  console.log("ID recibido para borrar:", id);
  try {
    const eliminado = await Paciente.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    res.status(200).json({ message: 'Paciente eliminado correctamente' });
  } catch (error) {
    console.error('Error al borrar paciente:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  crearPaciente,
  obtenerPacientes,
  obtenerGrupoFamiliar,
  borrarPaciente,
  obtenerPaciente
};