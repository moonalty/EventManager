require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')

const config = require('./config/config')

const PORT = process.env.PORT ?? 3000

const mainRouter = require('./routes/main.route')



config(app)

app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`**** BOBM HAS BEEN PLANTED on ${PORT}`);
})
