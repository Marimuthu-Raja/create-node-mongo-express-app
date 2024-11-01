import { NextFunction, Request, Response } from 'express';

import dotenv from 'dotenv';
import { ApiError } from '../utils/ApiError';

dotenv.config();
export const verifyApiKey = async (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  const apiKey = req.header('api-key');

  if (!apiKey) {
    throw new ApiError(401, 'Unauthorized Request');
  }

  if (apiKey !== process.env.API_KEY) {
    throw new ApiError(401, 'Invalid API Key');
  }

  next();
};
