const router = require("express").Router();
const { Category, Card } = require("../../db/models");

router.route("/:cat").get(async (req, res) => {
  const { cat } = req.params;
  console.log(">>>>>", cat);
  const cat1 = await Card.findAll({ where: { category_id: cat } });
  // console.log(cat1);
  res.json(cat1);
});

router.route("/:cat/:el").get(async (req, res) => {
  const { cat, el } = req.params;
  console.log("CAT+EL>>>>>>>>", cat, el);
  const oneCategory = await Card.findOne({ where: { id: cat } });
  console.log(oneCategory);
  res.json(oneCategory);
});

module.exports = router;
