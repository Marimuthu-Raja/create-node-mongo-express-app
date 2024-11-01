import mongoose from 'mongoose';
import logger from '../utils/winston.logger';

export default function connectToDb() {
  // Connect to MongoDB Atlas
  mongoose
    .connect(process.env.MONGODB_URI!)
    .then(() => logger.info('Connected to MongoDB'))
    .catch((err) => logger.error('Error connecting to mongodb: ' + err));
}
