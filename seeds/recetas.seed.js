const Receta = require('../models/receta')
const Solicitud = require('../models/solicitud')



async function seedRecetas() {
    const solicitudes = await Solicitud.find()
    const recetas = [
        {
            medicamento: "Paracetamol",
            cantidad: 20n, // BigInt
            presentacion: "Tabletas 500mg",
            solicitudId: solicitudes[2]._id
        }
    ]
    try {
        await Receta.deleteMany({})
        await Receta.insertMany(recetas)
    } catch (error) {
        console.log('Error al insertar las recetas', error.message)
    }
}

module.exports = {seedRecetas}