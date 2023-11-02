
from src.lambda_python.app import lambda_handler
import unittest
import json


class TestLambdaFunction(unittest.TestCase):
    def test_lambda_handler(self):
        # テスト用のイベントとコンテキストを作成
        event = {}
        context = {}

        # lambda_handler 関数を呼び出す
        response = lambda_handler(event, context)

        # ステータスコードが200であることを確認
        self.assertEqual(response['statusCode'], 200)

        # ボディが期待する値であることを確認
        self.assertEqual(response['body'], json.dumps(
            {'message': 'Hello World from Lambda!'}))


if __name__ == '__main__':
    unittest.main()
