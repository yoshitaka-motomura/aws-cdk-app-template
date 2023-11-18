import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda'
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import * as path from 'path'

export class ApigatewayStack extends cdk.Stack {
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

    const messageLambdaFunc = new NodejsFunction(this, 'MessageLambda', { ...lambdaFunctionDefaultOptions, entry: 'src/message.ts' })
    const hellolambdaFunc = new NodejsFunction(this, 'HelloLambda', { ...lambdaFunctionDefaultOptions, entry: 'src/hello.ts' })
    const pythonMessageLambdaFunc = new Function(this, 'PythonMessageLambda', {
      ...lambdaFunctionDefaultOptions,
      code: Code.fromAsset(path.join(__dirname, '../src/')),
      handler: 'app.lambda_handler',
      runtime: Runtime.PYTHON_3_10,
    })

    const api = new RestApi(this, 'MessageApi', {
      restApiName: 'Message API',
      description: 'This is the Message API',
      defaultCorsPreflightOptions: {
        allowOrigins: ['*'],
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['*'],
      },
    })

    const messageIntegration = new LambdaIntegration(messageLambdaFunc)
    const helloIntegration = new LambdaIntegration(hellolambdaFunc)
    const pythonMessageIntegration = new LambdaIntegration(pythonMessageLambdaFunc)

    const messageResource = api.root.addResource('message')
    const helloResource = api.root.addResource('hello')
    const pythonMessageResource = api.root.addResource('python-message')
    messageResource.addMethod('GET', messageIntegration)
    helloResource.addMethod('GET', helloIntegration)
    pythonMessageResource.addMethod('GET', pythonMessageIntegration)

    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'The URL of the API Gateway',
      exportName: 'ApiUrlExport',
    })
  }
}
