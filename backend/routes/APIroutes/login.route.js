const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../../db/models')


router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.uid = user.id;
      req.session.user = user;
      res.json();
    } else {
      res.status(304).json({
        text: "Неверный пароль или логин",
      });
    }
  } catch (error) {
    console.log("error");
  }
});


module.exports = router;
