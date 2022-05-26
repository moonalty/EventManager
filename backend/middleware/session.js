module.exports = (req, res, next) => {
  if (req.session.uid) {
    res.locals.isAuth = true;
    console.log(123);
    res.locals.uid = req.session.uid;
  } else {
    res.locals.isAuth = false
  }
  return next();
};
