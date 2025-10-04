const mongoose = require('mongoose')

const recetaSchema = new mongoose.Schema({
    medicamento: {
        type: String,
        required: true
    },
    cantidad: {
        type: BigInt,
        required: true
    },
    presentacion: {
        type: String,
        required: true
    },
    solicitudId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Solicitud' 
    }
},
{
    collection: 'recetas'
})

module.exports = mongoose.model("Receta", recetaSchema);