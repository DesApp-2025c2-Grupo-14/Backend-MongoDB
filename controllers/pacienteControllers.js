const Paciente = require('../models/paciente');
const mongoose = require('mongoose');

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


const obtenerPacienteCongrupoFamiliar = async (req, res) => {
  try {
     const {query} = req.params; // lo q recibe el buscador

      const condiciones = [
      { nroAfiliado: query },
      { dni: query },
      { telefono: query }
    ];
      // verifica si el _id es valido
      if (mongoose.Types.ObjectId.isValid(query)) {
      // lo agrega a las condiciones
      condiciones.push({ _id: query });
    }
     const paciente = await Paciente.findOne({
      // el or deja que varias condiciones sean verdaderas
      $or: condiciones
     }).lean(); // para que devuelva un objeto liviano sin metodos de mongoose ya que no se modifica nunca el paciente
  
      if (!paciente) {
        return res.status(404).json({ error: "No se encontró el paciente" });
      }
      // tomo la parte comun que comparte el grupo familiar del nroAfiliado (ej 10001)
      const base = paciente.nroAfiliado.split('-')[0]; 

      // busco todos los pacientes que compartan la base
      const grupoFamiliar = await Paciente.find({
        nroAfiliado: { $regex: `^${base}` } // el ^ indica que debe empezar con la base
      }).lean();  
    
      res.status(200).json({ paciente, grupoFamiliar });
    
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error del servidor' });
  
  }

}

module.exports = {
  crearPaciente,
  obtenerPacientes,
  obtenerPacienteCongrupoFamiliar
};