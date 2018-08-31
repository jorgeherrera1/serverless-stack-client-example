const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const params = {
  AuthFlow: 'ADMIN_NO_SRP_AUTH',
  ClientId: '3k3f71m59b36fg0fj8qlb49a0b', /* required */
  UserPoolId: 'us-east-1_scAXWVzif', /* required */
  AuthParameters: {
    'USERNAME': 'jorge.herrera.cabrera@gmail.com',
    'PASSWORD': '926861',
  },
};

cognitoidentityserviceprovider.adminInitiateAuth(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
