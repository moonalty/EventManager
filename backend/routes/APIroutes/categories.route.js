const router = require("express").Router();
const { Category, Card } = require("../../db/models");

router.route("/:cat").get(async (req, res) => {
  const { cat } = req.params;
  console.log(">>>>>", cat);
  const cat1 = await Card.findAll({ where: { category_id: cat } });
  // console.log(cat1);
  res.json(cat1);
});

module.exports = router;
