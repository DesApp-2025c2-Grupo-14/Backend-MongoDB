const mongoose = require("mongoose");

const solicitud = new mongoose.Schema({
  titulo: { type: String, required: true },
  tipo: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: { type: String, required: true }
})

module.exports = mongoose.model("Solicitud", solicitud);