const conn = require("./conn");
const Student = require("./Student");
const University = require("./University");

Student.belongsTo(University, { as: "university" });
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
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Tampa_Spartans_logo.svg/1200px-Tampa_Spartans_logo.svg.png",
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

  const dennis = await Student.create({
    firstName: "Dennis",
    lastName: "Harper",
    email: "dennis@usf",
    image:
      "https://www.midsouthfcu.org/wp-content/uploads/2019/07/male-student-300x202.jpeg",
    gpa: "3.8",
    universityId: usf.id,
  });

  const brenda = await Student.create({
    firstName: "Brenda",
    lastName: "West",
    email: "brenda@uf",
    image:
      "https://freedesignfile.com/upload/2017/01/A-young-female-student-sitting-at-the-desk-HD-picture.jpg",
    gpa: "3.2",
    universityId: uf.id,
  });

  const amy = await Student.create({
    firstName: "Riya",
    lastName: "Patel",
    email: "riya@usf",
    image:
      "https://scl.cornell.edu/sites/scl/files/person/2020-10/RiyaPatel.jpg",
    gpa: "3.6",
    universityId: usf.id,
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
