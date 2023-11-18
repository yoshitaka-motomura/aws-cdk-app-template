import {APIGatewayEventRequestContextV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda'

export const handler = async (_event: APIGatewayProxyEventV2, _context: APIGatewayEventRequestContextV2): Promise<APIGatewayProxyResultV2> => {
  const response = {
    message: 'Hello, world!',
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
