import { ctrlCreatePost, ctrlDeletePost, ctrlGetPost, ctrlUpdatePost } from "../controllers/post.controllers.js";
import { Router } from "express";
import { validation } from "../middlewares/validator.js";

const postRouter = Router();

// endpoint para traer todos los Post
postRouter.get('/api/post', ctrlGetPost)

// endpoint para crear un Post
postRouter.post('/api/post', validation, ctrlCreatePost)

// endpoint para actualizar un Post
postRouter.put('/api/:id', ctrlUpdatePost)

// endpoint para eliminar un post
postRouter.delete('/api/:id', ctrlDeletePost)


export { postRouter }