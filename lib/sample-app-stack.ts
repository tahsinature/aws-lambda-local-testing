import { Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';

import handlers from '../src/handlers';
import { HandlerInfo } from '../src/types';

function createLambda(handlerInfo: HandlerInfo, stack: Stack) {
  new lambda.NodejsFunction(stack, handlerInfo.handler, {
    runtime: Runtime.NODEJS_20_X,
    functionName: handlerInfo.functionName,
    entry: handlerInfo.entry,
    handler: handlerInfo.handler,
    timeout: cdk.Duration.minutes(3),
    logRetention: logs.RetentionDays.ONE_MONTH,
    bundling: {
      target: 'es2020',
    },
    environment: {},
  });
}

export class SampleAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    for (const handlerInfo of Object.values(handlers)) {
      createLambda(handlerInfo, this);
    }
  }
}
