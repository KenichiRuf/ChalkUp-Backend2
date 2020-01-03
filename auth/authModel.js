const db = require("../data/dbConfig.js");

const addUser = async user => {
  return await db("users").insert(user);
};

module.exports = { addUser };
