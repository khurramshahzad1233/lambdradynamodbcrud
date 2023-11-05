"use strict"

const AWS=require("aws-sdk");
const {v4} =require("uuid")

module.exports.handler = async (event) => {
  const {completed}=JSON.parse(event.body);
  const { id }=event.pathParameters;
  

  const dynamodb=new AWS.DynamoDB.DocumentClient();

  const updateparams={
    TableName:"firsttable",
      Key: {id},
      UpdateExpression: 'set completed = :completed',
      ExpressionAttributeValues:{
        ":completed": completed
      },
      ReturnValues: "ALL_NEW"
  };
  await dynamodb.update(updateparams).promise()
  return {
    statusCode: 201,
    body: JSON.stringify({
        message:"updated successfully"
    }),
  };
};
