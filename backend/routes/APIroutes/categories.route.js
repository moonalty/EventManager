const router = require("express").Router();
const { Category, Card } = require("../../db/models");

router.route("/:cat").get(async (req, res) => {
  const { cat } = req.params;
  const cat1 = await Card.findAll({ where: { category_id: cat } });
  // console.log(cat1);
  res.json(cat1);
});

router.route("/:cat/:el").get(async (req, res) => {
  const { cat, el } = req.params;
  const oneCategory = await Card.findOne({ where: { id: cat } });
  res.json(oneCategory);
});

module.exports = router;
