import { App } from 'aws-cdk-lib'
import { Template, Capture } from 'aws-cdk-lib/assertions'
import { ApigatewayStack } from '../lib/apigateway-stack'

describe('ApigatewayStack', () => {
  const app = new App()
  const stack = new ApigatewayStack(app, 'MyTestStack')
  const template = Template.fromStack(stack)

  it('should have two Lambda functions', () => {
    template.resourceCountIs('AWS::Lambda::Function', 2)
  })

  it('should have an API Gateway', () => {
    template.resourceCountIs('AWS::ApiGateway::RestApi', 1)
  })

  it('should have a message resource with GET method', () => {
    const messageIdCapture = new Capture()
    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'GET',
      ResourceId: messageIdCapture,
    })

    expect(messageIdCapture.asObject()).toEqual({
      Ref: expect.stringMatching(/MessageApi[A-Za-z0-9]+/),
    })
  })

  it('should have a hello resource with GET method', () => {
    const helloIdCapture = new Capture()
    template.hasResourceProperties('AWS::ApiGateway::Method', {
      HttpMethod: 'GET',
      ResourceId: helloIdCapture,
    })

    expect(helloIdCapture.asObject()).toEqual({
      Ref: expect.stringMatching(/MessageApi[A-Za-z0-9]+/),
    })
  })

  it('should have an output with API URL', () => {
    template.hasOutput('ApiUrl', {
      Export: {
        Name: 'ApiUrlExport',
      },
    })
  })
})
