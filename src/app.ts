import express from 'express';
import { RegisterRoutes } from './routes/routes';
import { setupSwagger } from './config/swagger';

const app = express();
const PORT = 3090;

app.use(express.json());

const apiRouter = express.Router();
RegisterRoutes(apiRouter);

app.use('/cursosonline', apiRouter);
RegisterRoutes(app);

setupSwagger(app);

app.listen(PORT, () => console.log(
    "Cursos Online rodando!" +
    "\nDisponivel em: http://localhost:" + PORT + 
    "\nLink do Swagger: http://localhost:" + PORT + "/api-docs"
));