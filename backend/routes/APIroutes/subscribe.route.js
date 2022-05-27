const router = require("express").Router();
const { Card, Subscription } = require("../../db/models");
router.route("/:el").get(async (req, res) => {
  const { el } = req.params;
  console.log(el);
  await Subscription.create({ card_id: +el, user_id: null });
  res.json({ message: "ADDED" });
});

module.exports = router;
