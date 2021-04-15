const dynamoDbLib = require("../libs/dynamodb-lib");

const { success, failure } = require("../libs/response-lib");

async function main(sk, data = {}) {
  const params = {
    TableName: process.env.participantsTableName,
  };

  try {
    const response = await dynamoDbLib.call("scan", params);
    return response;
    // return success(response);
  } catch (e) {
    console.log("Error:", e);
    return failure({ status: false });
  }
}

module.exports = {
  main,
};
