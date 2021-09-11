const router = require("express").Router();

router.use("/students", require("./student"));
router.use("/universities", require("./university"));

module.exports = router;
