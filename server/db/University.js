const { STRING, TEXT } = require("sequelize");
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
    allowNull: false,
  },
  slogan: {
    type: TEXT,
  },
  image: {
    type: STRING,
  },
});

module.exports = University;
