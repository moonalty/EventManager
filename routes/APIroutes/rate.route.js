const router = require("express").Router();

const { User, Card } = require("../../db/models");

router
  .route("/:id")
  .post(async (req, res) => {
    const { el, rate } = req.body;
    const currRate = rate.split(" ").shift();
    const card = await Card.findOne({ where: { id: el }, raw: true });

    const user = await User.update(
      { rating: +(+currRate) },
      { where: { id: card.user_id } }
    );
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const card = await Card.findOne({ where: { id }, raw: true });
    const user = await User.findOne({ where: { id: card.user_id }, raw: true });
    const result = user.rating;
    res.json({ result });
  });

module.exports = router;
