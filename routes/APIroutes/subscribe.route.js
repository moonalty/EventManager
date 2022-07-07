const router = require("express").Router();
const { Subscription, Card } = require("../../db/models");

router.route("/:el").get(async (req, res) => {
  const { el } = req.params;
  const userId = req.session.user.id;

  const userFinder = await Subscription.findAll({
    where: { user_id: userId },
    raw: true,
  });

  const finder = userFinder.find((ele) => ele.card_id === +el);

  if (!finder) {
    res.json({ message: "added" });
    await Subscription.create({ card_id: +el, user_id: userId });
  } else {
    res.json({ message: "exist" });
  }
});
router.route("/").delete(async (req, res) => {
  const { id } = req.body;
  const user = req.session.user;
  await Subscription.destroy({ where: { card_id: id, user_id: user.id } });

  res.json({ id });
});

module.exports = router;
