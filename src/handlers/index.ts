import path = require('path');

export default {
  generateRandomJoke: {
    functionName: 'generate-random-joke',
    entry: path.resolve(__dirname, 'joke.ts'),
    handler: 'generateRandomJoke',
  },

  randomNumber: {
    functionName: 'generate-random-number',
    entry: path.resolve(__dirname, 'calculator.ts'),
    handler: 'randomNumber',
  },
};
