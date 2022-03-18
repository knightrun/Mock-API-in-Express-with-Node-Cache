const { Router } = require('express')
const ctrl = require('./clear.ctrl')

const router = Router()

router.get('/', ctrl.clearCache)

module.exports = router