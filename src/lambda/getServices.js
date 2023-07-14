var AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  var params = {
    TableName: "Services"
  };
  
  dynamodb.scan(params, (err, data) => { // scan me trae todos los campos de la tabla
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
}