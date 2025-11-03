const validarObjectId = (req, res, next) => {
    const { id } = req.params;

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: "ID inváliDOM" });
    }
    next();
    };

module.exports =  { validarObjectId };