import { handler } from '../../../src/lambda_nodejs/message'
import { APIGatewayProxyEventV2, APIGatewayEventRequestContextV2 } from 'aws-lambda'

describe('handler with query string', () => {
  it('should return a 200 response', async () => {
    const event: APIGatewayProxyEventV2 = {
      queryStringParameters: {
        id: '123',
      },
    } as unknown as APIGatewayProxyEventV2
    const context: APIGatewayEventRequestContextV2 = {} as APIGatewayEventRequestContextV2

    const result = await handler(event, context)
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, 123' }),
    })
  })

  it('should return a 400 response', async () => {
    const event: APIGatewayProxyEventV2 = {
      queryStringParameters: {},
    } as unknown as APIGatewayProxyEventV2
    const context: APIGatewayEventRequestContextV2 = {} as APIGatewayEventRequestContextV2

    const result = await handler(event, context)
    expect(result).toEqual({
      statusCode: 400,
      body: JSON.stringify({ message: 'bad request' }),
    })
  })
})
