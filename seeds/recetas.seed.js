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
        },
        {
            medicamento: "Antirrábica",
            cantidad: 4n, // BigInt
            presentacion: "Frasco",
            solicitudId: solicitudes[3]._id
        },
        {
            medicamento: "Vacuna G1",
            cantidad: 1n, // BigInt
            presentacion: "Dosis",
            solicitudId: solicitudes[1]._id
        },
        {
            medicamento: "Ketorolac",
            cantidad: 10n, // BigInt
            presentacion: "Pastillas 20mg",
            solicitudId: solicitudes[0]._id
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