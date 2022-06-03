const router = require("express").Router();
const { Category, Card } = require("../../db/models");

router.route("/:cat")
.post(async (req, res) => {
  const {filter} = req.body
  // console.log(filter)
  const { cat } = req.params;
  const cat1 = await Card.findAll({ where: { category_id: cat } });
  // if (filter == 'cost') {
  //  const newFilt = cat1.sort((a,b)=>a.cost > b.cost ? 1: -1)
  //  console.log(newFilt)
  //  res.json(newFilt)
  // }
  // else {
    res.json(cat1)
  // }
  
});
// router.route("/:cat").delete((req, res) => {
//   const { cat } = req.params;
//   console.log("CAT>>>", cat);
// });
router.route("/:cat/:el").get(async (req, res) => {
  const { cat, el } = req.params;
  const oneCategory = await Card.findOne({ where: { id: cat } });
  res.json(oneCategory);
});

module.exports = router;
