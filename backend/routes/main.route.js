const router = require('express').Router()
const categoriesRouteApi = require('./APIroutes/categories.route');

router.use('/categories', categoriesRouteApi)

module.exports = router
