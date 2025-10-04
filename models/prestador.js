const mongoose = require('mongoose')

const prestadorSchema = new mongoose.Schema({
    
    cuit: {
        type: String, 
        required: true
    },
    nombre: {
        type: String, 
        required: true
    },
    centroMedico: {
        type: Boolean, 
        required: true
    },
    integraCM: {
        type: Boolean, 
        required: true
    },
    lugaresAtencion: [{
        nombre: {
            type: String, 
            required:true
        },
        direccion: {
            type: String, 
            required: true
        },
        horarios: [{
            dia: {
                type: String,
                enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
            },
            desde: {
                type: String,
                required: true 
            },
            hasta: {
                type: String,
                required: true 
            }
        }]
    }],
},
{
    collection: 'prestadores'
})

module.exports = mongoose.model("Prestador", prestadorSchema);