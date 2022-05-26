require('dotenv').config()
const express = require('express')
const path = require('path')

const config = require('./config/config')

const PORT = process.env.PORT ?? 4000

const mainRouter = require('./routes/main.route')

const app = express()

config(app)

app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`**** BOBM HAS BEEN PLANTED on ${PORT}`);
})
