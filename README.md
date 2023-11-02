# AWS CDK APP TEMPLATE

## Description
This is a template for AWS CDK applications. It is intended to be used as a starting point for new AWS CDK applications.

build lambda functions in pyhon and nodejs languages.

## Requirements
- Node.js 18.x or later
- AWS CDK 2.103 or later
- AWS CLI 2.2 or later
- *AWS Account* (An AWS account is not required when using localstack.)

*OPTIONAL*
- Docker (docker desktop)
- localstack (Some AWS services require localstack pro.)
- awslocal
- cdklocal

## Documentation
[Github Pages](https://yoshitaka-motomura.github.io/aws-cdk-app-template/)

## References
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [AWS CDK API](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)


## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
