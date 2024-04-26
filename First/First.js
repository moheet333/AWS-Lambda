require("dotenv").config();

module.exports.handler = async (event) => {
  console.log("\nHello from Moheet!");
  console.log(process.env.MyVariable);
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
