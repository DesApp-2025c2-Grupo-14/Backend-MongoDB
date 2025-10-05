const mongoose = require('mongoose')

const autorizacionSchema = new mongoose.Schema({
    diasInternacion: {
        type: BigInt,
        required: true
    },
    solicitudId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Solicitud' 
    }
},
{
  collection: 'autorizaciones'
})

module.exports = mongoose.model("Autorizacion", autorizacionSchema);