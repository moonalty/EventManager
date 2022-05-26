
const express = require('express')
const router = express.Router()
const app = express()
const regRouter = require('./APIroutes/registration.route');
const loginRouter = require('./APIroutes/login.route');
const logoutRouter = require('./APIroutes/logout.route');

const categoriesRouteApi = require('./APIroutes/categories.route');


router.use('/categories', categoriesRouteApi)

app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter)




module.exports = router;
