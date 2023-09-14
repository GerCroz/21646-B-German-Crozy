import express from 'express';
import { postRouter } from './src/routes/post.routes.js';
import { startDb } from './src/config/database.js';

const app = express();

const port = 3000;

//middlewares
app.use(express.json())

app.use('/', postRouter)

app.listen(port, () => {
    console.log(`server listening http://localhost${port}`);
    startDb()
})