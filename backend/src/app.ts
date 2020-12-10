import express from 'express';

//importando as rotas criadas em routes
import linksRouter from './routes/links';

//vinculando o cors a aplicação para permitir que o front end se comunique com o backend
import cors from 'cors';

const app = express();

app.use(express.json());

//usando o cors
app.use(cors());

app.use(linksRouter);

export default app;
