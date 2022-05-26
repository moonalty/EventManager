const router = require('express').Router();
const { Category } = require('../../db/models');

router.route('/')
.get(async(req,res)=>{
  const allCategories = await Category.findAll({raw:true})
  res.json({allCategories})
})

module.exports = router;
