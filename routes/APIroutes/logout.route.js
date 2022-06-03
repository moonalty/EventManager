const router = require("express").Router();
const bcrypt = require("bcrypt");
const {User} = require('../../db/models')


router.get('/', (req, res) => {
  const {
    user
  } = req.session;
  if (user) {
    req.session.destroy();
    // res.clearCookie('sid');
    res.json({text:'выйти'});
  }
});

module.exports = router;
