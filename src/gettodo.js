'use strict';
const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  const scanParams = {
    TableName: "firsttable",
  };

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.scan(scanParams).promise();

  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};