const SituacionTerapeutica = require("../models/situacionTerapeutica")


const validarFechaFinal = async (req, res, next) => {
  const { id } = req.params; 
  const {fechaFinal}=req.body;

  try {
    //buscar situacion en base por id 
    const situacion = await SituacionTerapeutica.findById(id)
    //error si no lo encuentra
    if (!situacion) {
      return res.status(404).json({ message: 'Situacion no encontrada' });
    }
    
    if(fechaFinal && new Date(fechaFinal)<new Date(situacion.fechaInicio)){
        return res.status(400).json({ message:"La fecha final no puede ser anterior a la de inicio"})
    }

    req.situacion = situacion
    next();
  } catch (error) {
    console.error('Error al validar la fechaFinal:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports ={validarFechaFinal};