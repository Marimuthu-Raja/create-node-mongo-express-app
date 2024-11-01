import { app } from './app';
import connectToDb from './config/db';
import logger from './utils/winston.logger';
import { config } from 'dotenv';

config();
connectToDb();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
