const mongoose = require('mongoose')

const centroMedicoSchema = new mongoose.Schema ({


        cuit : {
            type: String,
            required : true
        },
        nombre: {
            type:String,
            required: true 
        },
        direccion: {
            type:String,
            required: true
        },
        horarios: [{
            dia: {
                type:String,
                enum : ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
            },
            desde: {
                type:String,
                required: true
            },
            hasta: {
                type:String,
                required: true
            }
        }],
        prestadores: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Prestador'
        }]
},
{
    collection: 'centroMedico'
})

module.exports = mongoose.model("CentroMedico", centroMedicoSchema);