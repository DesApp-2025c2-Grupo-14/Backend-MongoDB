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
            medicamento: "Amoxicilina",
            cantidad: 20n, // BigInt
            presentacion: "Tabletas 500mg",
            solicitudId: solicitudes[4]._id
        },
        {
            medicamento: "Pervinox",
            cantidad: 1n, // BigInt
            presentacion: "Frasco 500ml",
            solicitudId: solicitudes[5]._id
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