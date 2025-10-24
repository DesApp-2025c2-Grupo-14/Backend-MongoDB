
const validarTitulo = (req, res, next) => {
    const { titulo } = req.body;

    try {
        if (!titulo || titulo.length === 1) {
            return res.status(400).json({
                message: "El titulo debe contener algo, no me compliques la vida"
            });
        }
        next();
    } catch (error) {
        console.error('Error al validar la descripcion:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { validarTitulo };