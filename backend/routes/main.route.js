const express = require('express')
const router = express.Router()

const regRouter = require('./APIroutes/registration.route');
const loginRouter = require('./APIroutes/login.route');
const logoutRouter = require('./APIroutes/logout.route');
const titleRouter = require('./APIroutes/title.route');
const cardsRouter = require('./APIroutes/cards.route');

const categoriesRouteApi = require('./APIroutes/categories.route');


router.use('/categories', categoriesRouteApi)

router.use('/title', titleRouter);
router.use('/registration', regRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter)
router.use('/cards', cardsRouter);




module.exports = router;
