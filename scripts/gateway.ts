import * as express from 'express';
import * as bodyParser from 'body-parser';
import handlers from '../src/handlers';
import { LambdaHandler, LambdaResultType } from '../src/types';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const tryJSON = (content: any) => {
  try {
    return JSON.parse(content);
  } catch (e) {
    return content;
  }
};

const callLambdaHandlerAsync = (handler: LambdaHandler, body: any): Promise<LambdaResultType> => {
  return new Promise((resolve) => {
    const event = {
      body: JSON.stringify(body),
    } as any;
    const context = {} as any;

    const callback = (err: any, result: any) => {
      if (err) return resolve({ body: err.message || err, statusCode: 500 });

      resolve({ body: tryJSON(result.body), statusCode: result.statusCode });
    };

    handler(event, context, callback);
  });
};

const exec = async () => {
  const table: {}[] = [];
  console.log(`You can make request through any API Client for the following endpoints: [GET / POST]`);

  for (const domain of Object.values(handlers)) {
    const url = `/${domain.functionName}`;
    table.push({ function: domain.functionName, url });

    app.use(url, async (req, res) => {
      const handler = (await import(domain.entry))[domain.handler];
      const result = await callLambdaHandlerAsync(handler, req.body);

      res.status(result.statusCode).json(result.body);
    });
  }

  app.listen(port, () => {
    console.table(table);
    console.log(`API Gateway running on port: ${port}`);
  });
};

exec();
