import { LambdaHandler } from '../types';

export const randomNumber: LambdaHandler = async (_event, _context, callback) => {
  callback(null, {
    statusCode: 200,
    body: String(Math.floor(Math.random() * 100)),
  });
};
