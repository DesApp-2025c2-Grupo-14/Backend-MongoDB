
const validateSchema = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const details = error.details.map(d => d.message);
            return res.status(400).json({
                message: 'Error de validación',
                errors: details
            });
            }

            next();
        };
    };

module.exports = validateSchema;