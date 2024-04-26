const _ = require("lodash");

module.exports.capitalizeStatement = async (event) => {
  const result = _.capitalize("hello from lambda");
  return result;
};
