const Autorizacion = require('../models/autorizacion')
const Solicitud = require('../models/solicitud')

async function seedAutorizaciones() {
    const solicitudes = await Solicitud.find()
    const autorizaciones = [
        { diasInternacion: 7n,  solicitudId: solicitudes[200]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[201]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[202]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[203]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[204]._id },

        { diasInternacion: 4n,  solicitudId: solicitudes[205]._id },
        { diasInternacion: 8n,  solicitudId: solicitudes[206]._id },
        { diasInternacion: 1n,  solicitudId: solicitudes[207]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[208]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[209]._id },

        { diasInternacion: 11n, solicitudId: solicitudes[210]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[211]._id },
        { diasInternacion: 14n, solicitudId: solicitudes[212]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[213]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[214]._id },

        { diasInternacion: 9n,  solicitudId: solicitudes[215]._id },
        { diasInternacion: 7n,  solicitudId: solicitudes[216]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[217]._id },
        { diasInternacion: 13n, solicitudId: solicitudes[218]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[219]._id },

        { diasInternacion: 8n,  solicitudId: solicitudes[220]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[221]._id },
        { diasInternacion: 11n, solicitudId: solicitudes[222]._id },
        { diasInternacion: 15n, solicitudId: solicitudes[223]._id },
        { diasInternacion: 5n,  solicitudId: solicitudes[224]._id },

        { diasInternacion: 6n,  solicitudId: solicitudes[225]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[226]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[227]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[228]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[229]._id },

        { diasInternacion: 7n,  solicitudId: solicitudes[230]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[231]._id },
        { diasInternacion: 1n,  solicitudId: solicitudes[232]._id },
        { diasInternacion: 13n, solicitudId: solicitudes[233]._id },
        { diasInternacion: 8n,  solicitudId: solicitudes[234]._id },

        { diasInternacion: 3n,  solicitudId: solicitudes[235]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[236]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[237]._id },
        { diasInternacion: 2n,  solicitudId: solicitudes[238]._id },
        { diasInternacion: 14n, solicitudId: solicitudes[239]._id },

        { diasInternacion: 5n,  solicitudId: solicitudes[240]._id },
        { diasInternacion: 11n, solicitudId: solicitudes[241]._id },
        { diasInternacion: 7n,  solicitudId: solicitudes[242]._id },
        { diasInternacion: 4n,  solicitudId: solicitudes[243]._id },
        { diasInternacion: 12n, solicitudId: solicitudes[244]._id },

        { diasInternacion: 8n,  solicitudId: solicitudes[245]._id },
        { diasInternacion: 10n, solicitudId: solicitudes[246]._id },
        { diasInternacion: 6n,  solicitudId: solicitudes[247]._id },
        { diasInternacion: 3n,  solicitudId: solicitudes[248]._id },
        { diasInternacion: 9n,  solicitudId: solicitudes[249]._id },
        { diasInternacion: 4, solicitudId: solicitudes[250]._id },
        { diasInternacion: 7, solicitudId: solicitudes[251]._id },
        { diasInternacion: 2, solicitudId: solicitudes[252]._id },
        { diasInternacion: 10, solicitudId: solicitudes[253]._id },
        { diasInternacion: 6, solicitudId: solicitudes[254]._id },

        { diasInternacion: 12, solicitudId: solicitudes[255]._id },
        { diasInternacion: 3, solicitudId: solicitudes[256]._id },
        { diasInternacion: 8, solicitudId: solicitudes[257]._id },
        { diasInternacion: 5, solicitudId: solicitudes[258]._id },
        { diasInternacion: 14, solicitudId: solicitudes[259]._id },

        { diasInternacion: 1, solicitudId: solicitudes[260]._id },
        { diasInternacion: 9, solicitudId: solicitudes[261]._id },
        { diasInternacion: 11, solicitudId: solicitudes[262]._id },
        { diasInternacion: 4, solicitudId: solicitudes[263]._id },
        { diasInternacion: 15, solicitudId: solicitudes[264]._id },

        { diasInternacion: 6, solicitudId: solicitudes[265]._id },
        { diasInternacion: 3, solicitudId: solicitudes[266]._id },
        { diasInternacion: 13, solicitudId: solicitudes[267]._id },
        { diasInternacion: 7, solicitudId: solicitudes[268]._id },
        { diasInternacion: 2, solicitudId: solicitudes[269]._id },

        { diasInternacion: 10, solicitudId: solicitudes[270]._id },
        { diasInternacion: 5, solicitudId: solicitudes[271]._id },
        { diasInternacion: 12, solicitudId: solicitudes[272]._id },
        { diasInternacion: 8, solicitudId: solicitudes[273]._id },
        { diasInternacion: 4, solicitudId: solicitudes[274]._id },

        { diasInternacion: 9, solicitudId: solicitudes[275]._id },
        { diasInternacion: 1, solicitudId: solicitudes[276]._id },
        { diasInternacion: 16, solicitudId: solicitudes[277]._id },
        { diasInternacion: 6, solicitudId: solicitudes[278]._id },
        { diasInternacion: 14, solicitudId: solicitudes[279]._id },

        { diasInternacion: 7, solicitudId: solicitudes[280]._id },
        { diasInternacion: 3, solicitudId: solicitudes[281]._id },
        { diasInternacion: 11, solicitudId: solicitudes[282]._id },
        { diasInternacion: 5, solicitudId: solicitudes[283]._id },
        { diasInternacion: 2, solicitudId: solicitudes[284]._id },

        { diasInternacion: 10, solicitudId: solicitudes[285]._id },
        { diasInternacion: 8, solicitudId: solicitudes[286]._id },
        { diasInternacion: 4, solicitudId: solicitudes[287]._id },
        { diasInternacion: 12, solicitudId: solicitudes[288]._id },
        { diasInternacion: 9, solicitudId: solicitudes[289]._id },

        { diasInternacion: 15, solicitudId: solicitudes[290]._id },
        { diasInternacion: 6, solicitudId: solicitudes[291]._id },
        { diasInternacion: 3, solicitudId: solicitudes[292]._id },
        { diasInternacion: 13, solicitudId: solicitudes[293]._id },
        { diasInternacion: 1, solicitudId: solicitudes[294]._id },

        { diasInternacion: 7, solicitudId: solicitudes[295]._id },
        { diasInternacion: 5, solicitudId: solicitudes[296]._id },
        { diasInternacion: 11, solicitudId: solicitudes[297]._id },
        { diasInternacion: 8, solicitudId: solicitudes[298]._id },
        { diasInternacion: 2, solicitudId: solicitudes[299]._id }

    ]
    try {
        await Autorizacion.deleteMany({})
        await Autorizacion.insertMany(autorizaciones)
    } catch (error) {
        
        console.log('Error al insertar las autorizaciones', error.message)
    }
}

module.exports = {seedAutorizaciones}