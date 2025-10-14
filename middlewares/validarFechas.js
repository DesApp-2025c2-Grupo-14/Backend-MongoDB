const SituacionTerapeutica = require("../models/situacionTerapeutica")

const validarFechas = (req, res, next) => {
  const { fechaInicio, fechaFinal } = req.body;

  // verificar fecha de inicio
  if (!fechaInicio) {
    return res.status(400).json({ message: "La fecha de inicio es obligatoria" });
  }


  // verificar que fecha final no sea anterior a fecha de inicio si la fecha final esta creada
  if (fechaFinal && new Date(fechaFinal) < new Date(fechaInicio)) {
    return res.status(400).json({ message: "La fecha final no puede ser anterior a la de inicio" });
  }

  next();
};

module.exports = { validarFechas };
