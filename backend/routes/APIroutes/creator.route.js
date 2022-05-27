const router = require('express').Router()
const {Card} = require("../../db/models");


router.route('/')
.post( async (req, res)=> {
  const userId = req.session.user.id;
  const {title} = req.body
  const cardTitle = await Card.findOne({where: {title}})
  if(!cardTitle){
    const newCard = await Card.create({
      ...req.body
    })
  }
})



module.exports = router
