const Solicitud = require("../models/solicitud");

const validarEstadoSolicitud = async (req, res, next) => {
    const id = req.params.id
    const estado = req.body.estado
    let mensaje = "La solicitud ha sido "
    try {
        const solicitud = await Solicitud.findById(
          { _id: id }
        );

        let procesada = solicitud.estado === estado || solicitud.estado === "Rechazada" || solicitud.estado === "Aprobada"

        mensaje += solicitud.estado === "Observada" ?
                    " observada." :
                    solicitud.estado === "Rechazada" ?
                    " rechazada." :
                    solicitud.estado === "Aprobada" ?
                    " aprobada." :
                    " analizada."

        if(procesada)
            return res.status(400).json({mensaje});

        next()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports ={validarEstadoSolicitud};