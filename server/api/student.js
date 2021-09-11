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
    res.send(
      await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
