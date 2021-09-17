const router = require("express").Router();
const { University, Student } = require("../db").models;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(201).send(
      await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        image: req.body.image,
        gpa: req.body.gpa,
        universityId: req.body.universityId * 1,
      })
    );
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params);
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.send(student);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
