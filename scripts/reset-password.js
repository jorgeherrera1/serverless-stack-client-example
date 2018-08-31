const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const params = {
  UserPoolId: 'us-east-1_scAXWVzif', /* required */
  Username: 'jorge.herrera.cabrera@gmail.com' /* required */
};
cognitoidentityserviceprovider.adminResetUserPassword(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

