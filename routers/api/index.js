const { Router } = require('express')
const ctrl = require('./test.ctrl')

const router = Router()

router.get('/', ctrl)

module.exports = router