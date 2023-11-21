import { LambdaHandler } from '../types';

export const generateRandomJoke: LambdaHandler = async (_event, _context, callback) => {
  const id = Math.random();

  callback(null, {
    statusCode: 200,
    body: `Joke ID: ${id}`,
  });
};
