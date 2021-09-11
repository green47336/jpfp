const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const conn = require("./conn");

const University = conn.define("university", {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  address: {
    type: STRING,
    unique: true,
  },
  slogan: {
    type: STRING,
  },
  image: {
    type: STRING,
  },
});

module.exports = University;
