const Sequelize = require("sequelize");
const { STRING } = require("sequelize");
const conn = require("./conn");

const Student = conn.define("student", {
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
  },
  image: {
    type: STRING,
  },
  gpa: {
    type: STRING,
  },
});

module.exports = Student;
