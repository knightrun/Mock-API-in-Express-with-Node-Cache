const nodeCache = require('node-cache')
const cache = new nodeCache({ stdTTL: 10 })

const get = (key) => {
  if(cache.has(key)) {
    return JSON.parse(cache.get(key))
  }

  return false
}

const set = (key, data) => {
  cache.set(key, JSON.stringify(data))
}

const del = () => {
  const keys = cache.keys()
  if(keys.length) {
    cache.del(keys)
    return true
  }
  return false
}

module.exports = { get, set, del }