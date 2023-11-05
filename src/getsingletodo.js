'use strict';
const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
    const {id}=event.pathParameters;
    const params={
        TableName:  "firsttable",
        Key:    {id}
    }

    let todo;
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.get(params).promise();

  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }
  todo=result.Item;

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};