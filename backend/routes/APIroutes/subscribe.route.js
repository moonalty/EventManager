const router = require("express").Router();
const { Card, Subscription } = require("../../db/models");
router.route("/:el").get(async (req, res) => {
  const { el } = req.params;
  const userId = req.session.user.id;
  await Subscription.create({ card_id: +el, user_id: userId });
  res.json({ message: "ADDED" });
});

module.exports = router;
