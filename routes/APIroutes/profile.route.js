const router = require("express").Router();
const { Subscription, Card, User, Category } = require("../../db/models");

router.route("/").get(async (req, res) => {
  const userId = req.session.user.id;

  let arr = [];
  const user = await User.findOne({ where: { id: userId } });

  if (user.role === "Пользователь") {
    const subs = await Subscription.findAll({ where: { user_id: userId } });
    for (let i = 0; i < subs.length; i++) {
      let jj = await Card.findAll({
        where: { id: subs[i].card_id },
        raw: true,
      });

      arr.push(jj);
    }
  } else if (user.role === "Организатор") {
    const creatorCards = await Card.findAll({ where: { user_id: userId } });
    arr = creatorCards;
  }
  res.json(arr);
});
router.route("/:id").get((req, res) => {
  const { id } = req.params;
});
module.exports = router;
