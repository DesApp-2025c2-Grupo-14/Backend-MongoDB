const SituacionTerapeutica = require("../models/situacionTerapeutica")

const validarFechas = (req, res, next) => {
  const { fechaInicio, fechaFinal } = req.body;
  if (!fechaInicio) {
    return res.status(400).json({ message: "La fecha de inicio es obligatoria" });
  }
  if (fechaFinal && new Date(fechaFinal) < new Date(fechaInicio)) {
    return res.status(400).json({ message: "La fecha final no puede ser anterior a la de inicio" });
  }

  next();
};

module.exports = { validarFechas };
