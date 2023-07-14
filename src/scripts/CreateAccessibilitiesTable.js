// Creaci[on de una tabla en DynamoDb]

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1" // Poner la region que tengo definida en mi consola de aws
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Accessibillities",
  KeySchema: [
    // Partition Key
    { AttributeName: "name", KeyType: "HASH" },
  ],
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});