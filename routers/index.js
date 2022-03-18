const { Router } = require('express')
const router = Router()

router.use('/api', require('./api'))
router.use('/view', require('./view'))
router.use('/clear', require('./clear'))

module.exports = router