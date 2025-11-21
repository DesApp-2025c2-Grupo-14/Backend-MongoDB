const Receta = require('../models/receta')
const Solicitud = require('../models/solicitud')



async function seedRecetas() {
    const solicitudes = await Solicitud.find()
    const recetas = [
        { medicamento: "Ibuprofeno", cantidad: 20n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[0]._id },
        { medicamento: "Amoxicilina", cantidad: 21n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[1]._id },
        { medicamento: "Paracetamol", cantidad: 24n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[2]._id },
        { medicamento: "Diclofenac", cantidad: 10n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[3]._id },
        { medicamento: "Azitromicina", cantidad: 6n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[4]._id },
        { medicamento: "Loratadina", cantidad: 15n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[5]._id },
        { medicamento: "Ranitidina", cantidad: 20n, presentacion: "Tabletas 150mg", solicitudId: solicitudes[6]._id },
        { medicamento: "Ibuprofeno Pediátrico", cantidad: 2n, presentacion: "Jarabe 100mg/5ml", solicitudId: solicitudes[7]._id },
        { medicamento: "Betametasona", cantidad: 1n, presentacion: "Crema 0.1%", solicitudId: solicitudes[8]._id },
        { medicamento: "Ketorolac", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[9]._id },

        { medicamento: "Ciprofloxacina", cantidad: 14n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[10]._id },
        { medicamento: "Clotrimazol", cantidad: 1n, presentacion: "Crema 1%", solicitudId: solicitudes[11]._id },
        { medicamento: "Omeprazol", cantidad: 28n, presentacion: "Cápsulas 20mg", solicitudId: solicitudes[12]._id },
        { medicamento: "Salbutamol", cantidad: 1n, presentacion: "Inhalador 100mcg", solicitudId: solicitudes[13]._id },
        { medicamento: "Budesonida", cantidad: 1n, presentacion: "Inhalador 200mcg", solicitudId: solicitudes[14]._id },
        { medicamento: "Ibuprofeno", cantidad: 12n, presentacion: "Tabletas 600mg", solicitudId: solicitudes[15]._id },
        { medicamento: "Amoxicilina + Clavulánico", cantidad: 14n, presentacion: "Cápsulas 875/125mg", solicitudId: solicitudes[16]._id },
        { medicamento: "Cetirizina", cantidad: 20n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[17]._id },
        { medicamento: "Clobetasol", cantidad: 1n, presentacion: "Crema 0.05%", solicitudId: solicitudes[18]._id },
        { medicamento: "Clindamicina", cantidad: 16n, presentacion: "Cápsulas 300mg", solicitudId: solicitudes[19]._id },

        { medicamento: "Gotas óticas con Ciprofloxacina", cantidad: 1n, presentacion: "Frasco 10ml", solicitudId: solicitudes[20]._id },
        { medicamento: "Tetraciclina", cantidad: 1n, presentacion: "Crema 3%", solicitudId: solicitudes[21]._id },
        { medicamento: "Ibuprofeno", cantidad: 14n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[22]._id },
        { medicamento: "Naproxeno", cantidad: 10n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[23]._id },
        { medicamento: "Ambroxol", cantidad: 1n, presentacion: "Jarabe 30mg/5ml", solicitudId: solicitudes[24]._id },
        { medicamento: "Colirio Antibiótico", cantidad: 1n, presentacion: "Frasco 5ml", solicitudId: solicitudes[25]._id },
        { medicamento: "Vitamina D", cantidad: 4n, presentacion: "Ampollas 600.000 UI", solicitudId: solicitudes[26]._id },
        { medicamento: "Hierro", cantidad: 30n, presentacion: "Tabletas 100mg", solicitudId: solicitudes[27]._id },
        { medicamento: "Trimetoprima-Sulfametoxazol", cantidad: 20n, presentacion: "Tabletas 160/800mg", solicitudId: solicitudes[28]._id },
        { medicamento: "Clonazepam", cantidad: 30n, presentacion: "Tabletas 0.5mg", solicitudId: solicitudes[29]._id },

        { medicamento: "Ibuprofeno", cantidad: 20n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[30]._id },
        { medicamento: "Mupirocina", cantidad: 1n, presentacion: "Crema 2%", solicitudId: solicitudes[31]._id },
        { medicamento: "Amoxicilina", cantidad: 14n, presentacion: "Suspensión 250mg/5ml", solicitudId: solicitudes[32]._id },
        { medicamento: "Metformina", cantidad: 30n, presentacion: "Tabletas 850mg", solicitudId: solicitudes[33]._id },
        { medicamento: "Losartán", cantidad: 30n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[34]._id },
        { medicamento: "Hidrocortisona", cantidad: 1n, presentacion: "Crema 1%", solicitudId: solicitudes[35]._id },
        { medicamento: "Amoxicilina", cantidad: 21n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[36]._id },
        { medicamento: "Paracetamol Pediátrico", cantidad: 1n, presentacion: "Jarabe 160mg/5ml", solicitudId: solicitudes[37]._id },
        { medicamento: "Clotrimazol + Betametasona", cantidad: 1n, presentacion: "Crema", solicitudId: solicitudes[38]._id },
        { medicamento: "Claritromicina", cantidad: 10n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[39]._id },

        { medicamento: "Diclofenac", cantidad: 15n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[40]._id },
        { medicamento: "Oximetazolina", cantidad: 1n, presentacion: "Gotas nasales 0.05%", solicitudId: solicitudes[41]._id },
        { medicamento: "Clorhexidina", cantidad: 1n, presentacion: "Solución 2%", solicitudId: solicitudes[42]._id },
        { medicamento: "Ibuprofeno", cantidad: 10n, presentacion: "Tabletas 600mg", solicitudId: solicitudes[43]._id },
        { medicamento: "Dextrometorfano", cantidad: 1n, presentacion: "Jarabe Antitusivo", solicitudId: solicitudes[44]._id },
        { medicamento: "Clindamicina", cantidad: 16n, presentacion: "Cápsulas 300mg", solicitudId: solicitudes[45]._id },
        { medicamento: "Magnesio", cantidad: 30n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[46]._id },
        { medicamento: "Crema con Urea", cantidad: 1n, presentacion: "Pomo 30%", solicitudId: solicitudes[47]._id },
        { medicamento: "Tramadol", cantidad: 10n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[48]._id },
        { medicamento: "Ketorolac", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[49]._id },

        { medicamento: "Ibuprofeno", cantidad: 20n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[50]._id },
        { medicamento: "Amoxicilina", cantidad: 30n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[51]._id },
        { medicamento: "Paracetamol", cantidad: 20n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[52]._id },
        { medicamento: "Salbutamol", cantidad: 1n, presentacion: "Inhalador 100mcg", solicitudId: solicitudes[53]._id },
        { medicamento: "Diclofenac", cantidad: 20n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[54]._id },
        { medicamento: "Omeprazol", cantidad: 28n, presentacion: "Cápsulas 20mg", solicitudId: solicitudes[55]._id },
        { medicamento: "Clonazepam", cantidad: 30n, presentacion: "Tabletas 0.5mg", solicitudId: solicitudes[56]._id },
        { medicamento: "Metformina", cantidad: 60n, presentacion: "Tabletas 850mg", solicitudId: solicitudes[57]._id },
        { medicamento: "Azitromicina", cantidad: 3n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[58]._id },
        { medicamento: "Betametasona", cantidad: 1n, presentacion: "Crema 30g", solicitudId: solicitudes[59]._id },

        { medicamento: "Cetirizina", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[60]._id },
        { medicamento: "Ranitidina", cantidad: 20n, presentacion: "Tabletas 150mg", solicitudId: solicitudes[61]._id },
        { medicamento: "Ketorolac", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[62]._id },
        { medicamento: "Ibuprofeno", cantidad: 15n, presentacion: "Jarabe 100ml", solicitudId: solicitudes[63]._id },
        { medicamento: "Paracetamol", cantidad: 25n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[64]._id },
        { medicamento: "Amoxicilina", cantidad: 15n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[65]._id },
        { medicamento: "Salbutamol", cantidad: 1n, presentacion: "Inhalador 100mcg", solicitudId: solicitudes[66]._id },
        { medicamento: "Omeprazol", cantidad: 20n, presentacion: "Cápsulas 20mg", solicitudId: solicitudes[67]._id },
        { medicamento: "Ibuprofeno", cantidad: 30n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[68]._id },
        { medicamento: "Cetirizina", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[69]._id },

        { medicamento: "Diclofenac", cantidad: 20n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[70]._id },
        { medicamento: "Metformina", cantidad: 60n, presentacion: "Tabletas 850mg", solicitudId: solicitudes[71]._id },
        { medicamento: "Ibuprofeno", cantidad: 20n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[72]._id },
        { medicamento: "Azitromicina", cantidad: 3n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[73]._id },
        { medicamento: "Ketorolac", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[74]._id },
        { medicamento: "Cetirizina", cantidad: 15n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[75]._id },
        { medicamento: "Ranitidina", cantidad: 25n, presentacion: "Tabletas 150mg", solicitudId: solicitudes[76]._id },
        { medicamento: "Cetirizina", cantidad: 1n, presentacion: "Inhalador 100mcg", solicitudId: solicitudes[77]._id },
        { medicamento: "Amoxicilina", cantidad: 30n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[78]._id },
        { medicamento: "Paracetamol", cantidad: 20n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[79]._id },

        { medicamento: "Ibuprofeno", cantidad: 25n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[80]._id },
        { medicamento: "Metformina", cantidad: 30n, presentacion: "Tabletas 850mg", solicitudId: solicitudes[81]._id },
        { medicamento: "Ibuprofeno", cantidad: 20n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[82]._id },
        { medicamento: "Omeprazol", cantidad: 28n, presentacion: "Cápsulas 20mg", solicitudId: solicitudes[83]._id },
        { medicamento: "Salbutamol", cantidad: 1n, presentacion: "Inhalador 100mcg", solicitudId: solicitudes[84]._id },
        { medicamento: "Azitromicina", cantidad: 3n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[85]._id },
        { medicamento: "Tramadol", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[86]._id },
        { medicamento: "Ranitidina", cantidad: 20n, presentacion: "Tabletas 150mg", solicitudId: solicitudes[87]._id },
        { medicamento: "Paracetamol", cantidad: 20n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[88]._id },
        { medicamento: "Omeprazol", cantidad: 20n, presentacion: "Cápsulas 20mg", solicitudId: solicitudes[89]._id },

        { medicamento: "Ibuprofeno", cantidad: 20n, presentacion: "Tabletas 400mg", solicitudId: solicitudes[90]._id },
        { medicamento: "Diclofenac", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[91]._id },
        { medicamento: "Diclofenac", cantidad: 25n, presentacion: "Tabletas 50mg", solicitudId: solicitudes[92]._id },
        { medicamento: "Amoxicilina", cantidad: 30n, presentacion: "Cápsulas 500mg", solicitudId: solicitudes[93]._id },
        { medicamento: "Ketorolac", cantidad: 10n, presentacion: "Tabletas 10mg", solicitudId: solicitudes[94]._id },
        { medicamento: "Paracetamol", cantidad: 25n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[95]._id },
        { medicamento: "Clonazepam", cantidad: 1n, presentacion: "Inhalador 100mcg", solicitudId: solicitudes[96]._id },
        { medicamento: "Omeprazol", cantidad: 28n, presentacion: "Cápsulas 20mg", solicitudId: solicitudes[97]._id },
        { medicamento: "Betametasona", cantidad: 1n, presentacion: "Crema 30g", solicitudId: solicitudes[98]._id },
        { medicamento: "Azitromicina", cantidad: 3n, presentacion: "Tabletas 500mg", solicitudId: solicitudes[99]._id },
    ]
    try {
        await Receta.deleteMany({})
        await Receta.insertMany(recetas)
    } catch (error) {
        console.log('Error al insertar las recetas', error.message)
    }
}

module.exports = {seedRecetas}