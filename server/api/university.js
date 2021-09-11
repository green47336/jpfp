const router = require("express").Router();
const { University, Student } = require("../db").models;

router.get("/", async (req, res, next) => {
  try {
    res.send(await University.findAll());
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send(
      await University.create({
        name: req.body.name,
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
