import { App } from 'aws-cdk-lib'
import { Template, Capture } from 'aws-cdk-lib/assertions'
import { ApigatewayStack } from '../lib/apigateway-stack'

describe('ApigatewayStack', () => {
  const app = new App()
  const stack = new ApigatewayStack(app, 'MyTestStack')
  const template = Template.fromStack(stack)

  //lambdaファンクションが2つあるかどうか
  it('should have two Lambda functions', () => {
    template.resourceCountIs('AWS::Lambda::Function', 3)
  })

  //API Gatewayがあるかどうか
  it('should have an API Gateway', () => {
    template.resourceCountIs('AWS::ApiGateway::RestApi', 1)
  })

  //API GatewayのリソースがmessageがGETとして定義されているか
  it('should have a message resource with GET method', () => {
    const messageIdCapture = new Capture()
    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'GET',
      ResourceId: messageIdCapture,
    })
    //messageIdCaptureが正規表現にマッチするかどうか
    expect(messageIdCapture.asObject()).toEqual({
      Ref: expect.stringMatching(/MessageApi[A-Za-z0-9]+/),
    })
  })

  //API GatewayのリソースがhelloがGETとして定義されているか
  it('should have a hello resource with GET method', () => {
    const helloIdCapture = new Capture()
    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'GET',
      ResourceId: helloIdCapture,
    })

    //helloIdCaptureが正規表現にマッチするかどうか
    expect(helloIdCapture.asObject()).toEqual({
      Ref: expect.stringMatching(/MessageApi[A-Za-z0-9]+/),
    })
  })

  //API Gatewayのリソースがpython-messageがGETとして定義されているか
  it('should have a python-message resource with GET method', () => {
    const pythonMessageIdCapture = new Capture()
    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'GET',
      ResourceId: pythonMessageIdCapture,
    })

    //pythonMessageIdCaptureが正規表現にマッチするかどうか
    expect(pythonMessageIdCapture.asObject()).toEqual({
      Ref: expect.stringMatching(/MessageApi[A-Za-z0-9]+/),
    })
  })

  //API GatewayのAPI URLが出力されているかどうか
  it('should have an output with API URL', () => {
    template.hasOutput('ApiUrl', {
      Export: {
        Name: 'ApiUrlExport',
      },
    })
  })
})
