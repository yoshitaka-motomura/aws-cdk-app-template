# AWS CDK APP TEMPLATE

## Description
AWS CDK のアプリケーションを生成するテンプレートです。AWS CDK のアプリケーションを新規に作成する際に利用してください。


## Requirements
- [Node.js 18.x or later](https://nodejs.org/)
- [AWS CDK 2.103 or later](https://aws.amazon.com/cdk/)
- [AWS CLI 2.2 or later](https://aws.amazon.com/cli/)
- [AWS Account](https://aws.amazon.com/account/) (An AWS account is not - required when using [localstack](https://localstack.cloud/).)


*OPTIONAL*
- [Docker (docker desktop)](https://www.docker.com/products/docker-desktop)
- [localstack (Some AWS services require localstack pro.)](https://localstack.cloud/)
- [awslocal](https://github.com/localstack/awscli-local)
- [cdklocal](https://github.com/localstack/aws-cdk-local)

## References
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [AWS CDK API](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)


## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npm run lint` perform the eslint
- `npm run lint:fix` perform the eslint --fix & prettier --write
- `npm run docs:dev` start the docs server
- `npm run docs:build` build the docs
- `npm run api:dev` start the api document hot server
- `npm run api:build` build the api document
- `npm run api:prepare` prepare the api document
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

