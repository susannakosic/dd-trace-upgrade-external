module.exports = async () => ({
  'stackName': 'op-api-local',
  'apiName': 'local-op-api',
  'restApi': {
    'accessLoggingEnabled': false,
    'executionLoggingEnabled': false,
    'apiGatewayEndpointType': 'REGIONAL',
  },
  'ddEnabled': true,
  'ssmArnPrefix': 'arn:aws:ssm:eu-west-2:xxxxxx:',
  'env': {
    'DD_TRACE_DEBUG': 'true',
    'STAGE': 'local',
    'NODE_ENV': 'development',
    'IS_OFFLINE': 'true',
  },
  'awsProfile': 'default',
  'datadogApiKeySecretArn':
    'arn:aws:secretsmanager:eu-west-2:xxxxxxxxxxxxxx',
});
