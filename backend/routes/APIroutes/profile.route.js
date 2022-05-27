const router = require("express").Router();
const { User, Subscription, Card } = require("../../db/models");

router.route("/").get(async (req, res) => {
  const userId = req.session.user.id;
  const arr = [];

  const subs = await Subscription.findAll({ where: { user_id: userId } });
  for (let i = 0; i < subs.length; i++) {
    let jj = await Card.findAll({ where: { id: subs[i].card_id }, raw: true });
    // console.log(jj);
    arr.push(jj);
  }
  // console.log("ARR", arr);
  // const userSubs = await Card.findAll({where: {id: }})
  res.json( arr );
});

module.exports = router;
