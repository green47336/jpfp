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
    res.status(201).send(await University.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params);
    const university = await University.findByPk(req.params.id);
    await university.destroy();
    res.send(university);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
