const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const params = {
  ClientId: '3k3f71m59b36fg0fj8qlb49a0b', /* required */
  ConfirmationCode: '926861', /* required */
  Password: 'Abcd1234$', /* required */
  Username: 'jorge.herrera.cabrera@gmail.com', /* required */
};

cognitoidentityserviceprovider.confirmForgotPassword(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
