const router = require("express").Router();
const { Card } = require("../../db/models");

router.route("/")
.get(async (req, res) => {
  const data = await Card.findAll({ raw:true});
  // console.log(cat1);
  res.json({data});
})

.post(async (req, res) => {
const {val} = req.body;
  const data = await Card.findAll({ where: {title:val}});
  // console.log(cat1);
  res.json({data});
});


module.exports = router;
