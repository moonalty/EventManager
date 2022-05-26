const router = require("express").Router();
const bcrypt = require("bcrypt");
const {User} = require('../../db/models')


router.get('/logout', (req, res) => {
  const {
    user
  } = req.session;
  if (user) {
    req.session.destroy();
    res.clearCookie('sid');
    res.redirect('/');
  }
});

module.exports = router;
