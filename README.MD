# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` - compile typescript to js
- `npm run watch` - watch for changes and compile
- `npm run test` - perform the jest unit tests
- `cdk deploy` - deploy this stack to your default AWS account/region
- `cdk diff` - compare deployed stack with current state
- `cdk synth` - emits the synthesized CloudFormation template

## Run the app locally

1. clone `.env.example` and create `.env`. You can execute:

   ```bash
   cp .env.example .env
   ```

2. Populate `.env` with real data.
3. `npm run local` - It will run the server / mimick AWS API Gateway

Then the app is ready to accept HTTP Calls. It will show the available endpoitns to the console.
