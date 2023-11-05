"use strict"

const AWS=require("aws-sdk");
const {v4} =require("uuid")

module.exports.handler = async (event) => {
  const {tododata}=JSON.parse(event.body);
  const createdAt=new Date().toISOString();
  const id=v4();

  const dynamodb=new AWS.DynamoDB.DocumentClient();

  const addparams={
    TableName:"firsttable",
    Item:{
      id:id,
      tododata:tododata,
      createdAt:createdAt,
      completed:true,
    },
  };
  await dynamodb.put(addparams).promise()
  return {
    statusCode: 201,
    body: JSON.stringify(addparams),
  };
};
