const router = require("express").Router();
const { Card, Category } = require("../../db/models");

router.route("/").post(async (req, res) => {
  const userId = req.session.user.id;
  const {
    title,
    picture,
    categoryName,
    date_start,
    date_end,
    cost,
    adress,
    people_count,
    org_link,
    body,
  } = req.body;
  console.log('categoryName!!!!!!!!!!!!', categoryName);
  const cardTitle = await Card.findOne({ where: { title } });
  if (!cardTitle) {
    const category = await Category.findOne({ where: { name: categoryName } });
    console.log('CATEGORY!!!!!!!!!!!!!!!!!!!!!!!!!', category);
  console.log(req.session.user.id)
  const {title} = req.body
  const cardTitle = await Card.findOne({where: {title}})
  if(!cardTitle){

    const newCard = await Card.create({
      title,
      image: picture,
      category_id: category.id,
      date_start,
      date_end,
      cost,
      adress,
      people_count,
      org_link,
      body,
      is_active: true,
      user_id: userId
    });
  }
});

module.exports = router;
