import { updateProductoService } from "../services/productosUpdate.service.js"; 

const updateProductoController = async (req, res) => {
    try {
        const producto = await updateProductoService(req.params.id, req.body);
        if (producto){
            res.status(200).send(req.body);
        }else{
            res.status(404).send("Error al actualizar producto con id: "+req.params.id)
        }        

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al actualizar producto' })
    }
}

export { updateProductoController }