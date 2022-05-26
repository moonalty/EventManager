const router = require("express").Router();
const { Category } = require("../../db/models");

router.route("/").get(async (req, res) => {
  const title = await Category.findAll({ raw:true });
  console.log(title);
  res.json({title});
});

module.exports = router;
