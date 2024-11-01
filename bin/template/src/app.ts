import express from 'express';
import morganMiddleware from './middleware/morgan.middleware';
import Promisify from './utils/Promisify';
import { verifyApiKey } from './middleware/auth.middleware';
import { todoRouter } from './router/todo.router';
import { errorHandler } from './middleware/errorhandler.middleware';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morganMiddleware);

app.use('/health', (req, res) => res.send('OK'));
app.use(Promisify(verifyApiKey));
app.use(`/api/v1/todo`, todoRouter);

app.use(errorHandler);
export { app };
