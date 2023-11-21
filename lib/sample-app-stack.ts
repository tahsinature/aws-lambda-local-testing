import { Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import handlers from '../src/handlers';

export class SampleAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn1 = new lambda.NodejsFunction(this, 'createRefundHandler', {
      runtime: Runtime.NODEJS_20_X,
      functionName: handlers.generateRandomJoke.functionName,
      entry: handlers.generateRandomJoke.entry,
      handler: handlers.generateRandomJoke.handler,
      timeout: cdk.Duration.minutes(3),
      logRetention: logs.RetentionDays.ONE_MONTH,
      bundling: {
        target: 'es2020',
      },
      environment: {},
    });

    console.log(fn1);
  }
}
