const express = require('express')
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const isSession = require('../middleware/session')
const sessionConfig = require('./sessionConfig')
const cors = require('cors')


module.exports = function config(app){
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
  app.use(express.static(path.join(process.env.PWD, 'public')))
  app.use(session(sessionConfig))
  app.use(cookieParser())
  app.use(isSession)
  app.use(cors())
}
