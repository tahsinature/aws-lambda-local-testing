import { Context, APIGatewayProxyCallback, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export type LambdaResultType = APIGatewayProxyResult;

export type LambdaHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback) => Promise<void>;
