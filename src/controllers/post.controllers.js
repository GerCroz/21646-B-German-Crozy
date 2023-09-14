// controladores de los post

import { PostModel } from "../models/Post.js"

//controlador para mostrar todos los Post

export const ctrlGetPost = async (_req, res) => {
    try {
        const posts = await PostModel.findAll()
        return res.status(202).json(posts)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

    // console.log(posts.length);
    // if(posts.length === 0){
    //     return res.status(404).json({
    //         message: "no hay posteos"
    //     })
    // }
}                  

//controlador para crear un  Post

export const ctrlCreatePost = async (req, res) => {
    // se capturan los datos necesarios del body 
//    const { title, content, link } = req.body;

// //    se validan los datos del body
//    if(title === "" || content === "" || link === ""){
//      return res.sendStatus(404)
//    }
    try {
        const newPost = await PostModel.create(req.body)
        return res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para actualizar un Post

export const ctrlUpdatePost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findByPk(id)

        if (!post) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }

        post.update(req.body)

        return res.status(200).json(post)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}
//controlador para eliminar un Post

export const ctrlDeletePost  = async (req, res) => {
    const { id } = req.params
    try {
        const postDeleted = await PostModel.destroy({
            where: {
                id: id
            }
        })
        if (!postDeleted) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        return res.status(200).json({
            message: 'Tarea eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}