const cache = require('../../helpers/cache')

const clearCache = (req, res) => {
  const isDeleted = cache.del()
  if(isDeleted) {
    res.send('success')
  } else {
    res.send('no cache')
  }
}

module.exports = { clearCache }