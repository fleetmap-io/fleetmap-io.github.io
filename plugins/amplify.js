import Amplify from '@aws-amplify/core'

export const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_identity_pool_id: 'us-east-1:b886ef89-6a90-4903-96fc-25af82fc629a',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_SWTiH7d38',
  aws_user_pools_web_client_id: '6itrbb0q665fbs82g92h3t2ukr',
  oauth: {
    redirectSignIn: 'https://nogartel.fleetmap.io/',
    redirectSignOut: 'https://nogartel.fleetmap.io/',
    domain: 'accounts.fleetmap.io',
    scope: [
      'phone',
      'email',
      'openid',
      'aws.cognito.signin.user.admin'
    ],
    responseType: 'code'
  },
  federationTarget: 'COGNITO_USER_POOLS'
}

Amplify.configure(awsConfig)

