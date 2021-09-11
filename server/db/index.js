const conn = require("./conn");
const Student = require("./Student");
const University = require("./University");

Student.belongsTo(University, { as: "unversity" });
University.hasMany(Student, { as: "students", foreignKey: "universityId" });

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  //Universities
  const usf = await University.create({
    name: "University of South Florida",
    address: "4202 E Fowler Ave, Tampa, FL 33620",
    slogan: "Go Bulls!",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/University_of_South_Florida_seal.svg/1200px-University_of_South_Florida_seal.svg.png",
  });

  const ut = await University.create({
    name: "University of Tampa",
    address: "401 W Kennedy Blvd, Tampa, FL 33606",
    slogan: "Go Spartans!",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/University_of_Tampa_seal.svg/1200px-University_of_Tampa_seal.svg.png",
  });

  const uf = await University.create({
    name: "University of Florida",
    address: "737 Reitz Union Drive, Gainesville, FL 32611",
    slogan: "Go Gators!",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/University_of_Florida_seal.svg/1200px-University_of_Florida_seal.svg.png",
  });

  //Students
  const brad = await Student.create({
    firstName: "Brad",
    lastName: "Oaksdale",
    email: "brad@usf",
    image:
      "https://www.wes.org/wp-content/uploads/2018/02/blog_20180219_iStock-504370537.jpg",
    gpa: "3.4",
    universityId: usf.id,
  });

  const koji = await Student.create({
    firstName: "Koji",
    lastName: "Sugimoto",
    email: "koji@ut",
    image:
      "https://img.freepik.com/free-photo/smiling-asian-business-man-using-laptop-computer-outdoors_171337-56477.jpg?size=626&ext=jpg",
    gpa: "3.5",
    universityId: ut.id,
  });

  const isabelle = await Student.create({
    firstName: "Isabelle",
    lastName: "Maginot",
    email: "isabelle@uf",
    image:
      "https://www.clevergirlfinance.com/wp-content/uploads/2020/06/college-student-budget.jpg",
    gpa: "4.0",
    universityId: uf.id,
  });

  console.log("Seeding done.");
};

syncAndSeed();

module.exports = {
  conn,
  syncAndSeed,
  models: {
    Student,
    University,
  },
};
