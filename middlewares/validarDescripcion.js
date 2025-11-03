
const validarDescripcion = (req, res, next) => {
    const { descripcion } = req.body;

    try {
        if (!descripcion || descripcion.length === 1) {
            return res.status(400).json({
                message: "La descripcion debe contener algo, no me compliques la vida"
            });
        }
        next();
    } catch (error) {
        console.error('Error al validar la descripcion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { validarDescripcion };