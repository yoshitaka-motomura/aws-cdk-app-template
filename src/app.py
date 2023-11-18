"""This is app.py."""
import json
from myfunc import add


def lambda_handler(event, context):
    """This is lambda_handler."""
    result = add(1, 1)
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({'message': 'Hello World from Lambda!', 'sum': result})
    }
