const express = require('express')
const router = express.Router()
const app = express()
const regRouter = require('./APIroutes/registration.route');
const loginRouter = require('./APIroutes/login.route');
const logoutRouter = require('./APIroutes/logout.route');



app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter)




module.exports = router;
