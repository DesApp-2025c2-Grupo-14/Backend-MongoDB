const mongoose = require('mongoose')

const reintegroSchema = new mongoose.Schema({
    cuit: {
        type: String,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    },
    pago: {
        type: String,
        required: true
    },
    facturadoA: {
        type: String,
        required: true
    },
    cbu: {
        type: String
    },
    solicitudId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Solicitud' 
    }
},
{
    collection: 'reintegros'
})

module.exports = mongoose.model("Reintegro", reintegroSchema);