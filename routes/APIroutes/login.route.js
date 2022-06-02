const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");

router.get("/", (req, res) => {
  res.json("ok");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (
    user &&
    (await bcrypt.compare(password, user.password)) &&
    email !== "" &&
    password !== ""
  ) {
    req.session.uid = user.id;
    req.session.user = user;
    res.json({
      text: "true",
      ...user,
    });
  } else {
    res.json({
      text: "false",
    });
  }
});

module.exports = router;
