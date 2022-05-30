const express = require("express");
const router = express.Router();

const regRouter = require("./APIroutes/registration.route");
const loginRouter = require("./APIroutes/login.route");
const logoutRouter = require("./APIroutes/logout.route");
const titleRouter = require("./APIroutes/title.route");
const subscribeRouter = require("./APIroutes/subscribe.route");
const categoriesRouteApi = require("./APIroutes/categories.route");
const profileRouter = require("./APIroutes/profile.route");
const creatorRouter = require("./APIroutes/creator.route");
const cardsRouter = require("./APIroutes/cards.route");
const rateRouter = require("./APIroutes/rate.route");
const sessionRouter = require("./APIroutes/session.route");

router.use("/categories", categoriesRouteApi);
router.use("/subscribe", subscribeRouter);
router.use("/title", titleRouter);
router.use("/registration", regRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);
router.use("/profile", profileRouter);
router.use("/profile", creatorRouter);
router.use("/cards", cardsRouter);
router.use("/rate", rateRouter);
router.use("/session", sessionRouter);

module.exports = router;
