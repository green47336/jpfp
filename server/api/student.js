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
    res.status(201).send(await Student.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.send(student);
  } catch (ex) {
    next(ex);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.send(await student.update(req.body));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
