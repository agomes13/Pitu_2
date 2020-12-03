import express from 'express';

//importando as rotas criadas em routes
import linksRouter from './routes/links';


const app = express();

app.use(express.json());

app.use(linksRouter);

export default app;
