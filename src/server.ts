import 'reflect-metadata'
import express, { json } from 'express';
import './database'
import { router } from './routes';

const app = express();
app.use(json())
app.use(router)

app.listen(3000, () => console.log('Server funcionando'))