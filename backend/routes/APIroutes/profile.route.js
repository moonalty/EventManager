const router = require("express").Router();
const { Subscription, Card, User } = require("../../db/models");

router.route("/").get(async (req, res) => {
  const userId = req.session.user.id;
  // console.log(req.session.user)
  let arr = [];
  const user = await User.findOne({where: {id : userId}})
  // console.log(user.role);
  if (user.role === 'Пользователь'){
    const subs = await Subscription.findAll({ where: { user_id: userId } });
    for (let i = 0; i < subs.length; i++) {
      let jj = await Card.findAll({ where: { id: subs[i].card_id }, raw: true });
      // console.log(jj);
      arr.push(jj);
    }
  } else if(user.role === 'Организатор') {
    const creatorCards = await Card.findAll({where: {user_id: userId}})
    arr = creatorCards
    console.log(arr);
}
  // console.log("ARR", arr);
  // const userSubs = await Card.findAll({where: {id: }})
  res.json(arr)
});
router.route("/:id").get((req, res) => {
  const { id } = req.params;
  // console.log(id);
});
module.exports = router;
