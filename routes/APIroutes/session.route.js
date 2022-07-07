const router = require("express").Router();
router.get("/", (req, res) => {
  const user = req.session.user;
  res.json(user);
});
module.exports = router;
