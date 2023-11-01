import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, APIGatewayEventRequestContextV2 } from 'aws-lambda'
export const handler = async (event: APIGatewayProxyEventV2, _context: APIGatewayEventRequestContextV2): Promise<APIGatewayProxyResultV2> => {
  const id = event.queryStringParameters?.id || false
  const code = id ? 200 : 400
  const response = {
    message: 'bad request',
  }

  if (id) {
    response.message = `Hello, ${id}`
  }

  return {
    statusCode: code,
    body: JSON.stringify(response),
  }
}
