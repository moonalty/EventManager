const router = require("express").Router();
const { Subscription } = require("../../db/models");

router.route("/:el").get(async (req, res) => {
  const { el } = req.params;
  const userId = req.session.user.id;
  console.log('EL>>>>>>>>>>>>>',el);
  // const finder = await Subscription.findOne({
  // where: { card_id: +el },
  // raw: true,
  // });
  const userFinder = await Subscription.findAll({
    where: { user_id: userId },
    raw: true,
  });
  console.log(userId);
  console.log(">>>>>>>", userFinder);
  // const allSubs = await Subscription.findAll();
  const finder = userFinder.find((ele) => ele.card_id === +el);
  console.log("FINDER>>>>>>>>>>>>>>>>>", finder);
  if (!finder) {
    console.log("POPAL");
    await Subscription.create({ card_id: +el, user_id: userId });
  }

  // if (!finder) {
  // await Subscription.create({ card_id: +el, user_id: userId });
  // res.json({ message: "ADDED" });
  // } else {
  // res.json({ message: "ALREADY EXIST" });
  // }
});

module.exports = router;
