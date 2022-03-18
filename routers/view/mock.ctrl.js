const axios = require('axios')
const cache = require('../../helpers/cache')

const cacheCheck = (req, res, next) => {
  try {
    const cacheData = cache.get('mock')
    if (cacheData) {
      console.log('has a cache')
      return res.status(200).json(cacheData)
    }
    console.log('no cache')
    return next()
  } catch (err) {
    throw new Error(err)
  }
}


const callback = async (req, res) => {
  try {
    const { data } = await axios.get('http://localhost:3333/api')
    cache.set('mock', data)
    return res.status(200).json(data)
  } catch ({response}) {
    return res.sendStatus(response.status)
  }
}

module.exports = {cacheCheck, callback}