import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda'
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import * as path from 'path'

/**
 * A Example CDK stack that Lambda function(nodejs and Python), API Gateway
 */

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const lambdaFunctionDefaultOptions = {
      runtime: Runtime.NODEJS_18_X,
      handler: 'handler',
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      environment: {
        TZ: 'Asia/Tokyo',
      },
    }

    const messageLambdaFunc = new NodejsFunction(this, 'MessageLambda', {
      ...lambdaFunctionDefaultOptions,
      entry: 'src/message.ts',
    })
    const hellolambdaFunc = new NodejsFunction(this, 'HelloLambda', {
      ...lambdaFunctionDefaultOptions,
      entry: 'src/hello.ts',
    })
    const pythonMessageLambdaFunc = new Function(this, 'PythonMessageLambda', {
      ...lambdaFunctionDefaultOptions,
      code: Code.fromAsset(path.join(__dirname, '../src/')),
      handler: 'app.lambda_handler',
      runtime: Runtime.PYTHON_3_10,
    })

    // API Gateway
    const api = new RestApi(this, 'ExampleApi', {
      restApiName: 'Example API',
      description: 'This is the Example API',
      defaultCorsPreflightOptions: {
        allowOrigins: ['*'],
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['*'],
      },
    })

    // API Gateway Resources
    api.root.addResource('message').addMethod('GET', new LambdaIntegration(messageLambdaFunc))
    api.root.addResource('hello').addMethod('GET', new LambdaIntegration(hellolambdaFunc))
    api.root.addResource('python-message').addMethod('GET', new LambdaIntegration(pythonMessageLambdaFunc))

    // Output API Gateway URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'The URL of the API Gateway',
      exportName: 'ApiUrlExport',
    })
  }
}
