const { Router } = require('express')
const ctrl = require('./mock.ctrl')

const router = Router()

router.get('/', ctrl.cacheCheck, ctrl.callback)

module.exports = router