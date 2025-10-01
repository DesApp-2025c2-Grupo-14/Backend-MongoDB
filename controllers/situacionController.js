const SituacionTerapeutica= require ('../models/situacionTerapeutica')

const eliminarSituacion = async (req, res) => {
    try {
        const id = req.params.id
        const postEliminado = await Post.findByIdAndDelete(id)
        await Comment.deleteMany({ post: id })
        await Post_Image.deleteMany({ post: id })
        res.status(200).json({ message: 'Publicación eliminada exitosamente' })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar la publicación' })
    }
}