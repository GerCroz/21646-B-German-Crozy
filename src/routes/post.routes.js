import { Router } from 'express';
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPosts, ctrlShowView, ctrlUpdatePost } from '../controllers/post.controllers.js';
import { validationPost, validationUpdate } from '../middlewares/validator.js';

const postRouter = Router();

// ruta de la vista de los posteos
postRouter.get('/', ctrlShowView);

// Ruta para obtener todos los posts
postRouter.get('/api/posts', ctrlGetPosts);

// Ruta para crear un nuevo post
postRouter.post('/api/posts', validationPost, ctrlCreatePost);

// Ruta para actualizar un post por su ID
postRouter.put('/api/posts/:id', validationUpdate, ctrlUpdatePost);

// Ruta para eliminar un post por su ID
postRouter.delete('/api/posts/:id', ctrlDeletePost);

export { postRouter };
