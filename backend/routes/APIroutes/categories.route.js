const router = require("express").Router();
const { Category } = require("../../db/models");

router.route("/:cat").get(async (req, res) => {
  const cat = await Category.findAll();
  res.json(cat);
});

module.exports = router;
