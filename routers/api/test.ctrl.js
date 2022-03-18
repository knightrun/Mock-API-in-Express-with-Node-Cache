const { readFileSync } = require('fs')
const path = require('path')

const getList = async () => {
  const buffer = readFileSync(path.join(process.cwd(), 'assets/data/testData.json'))
  const str = buffer.toString()
  if(!str) {
    return []
  }
  return JSON.parse(str)
}

const callback = async (req, res) => {
  try {
    const list = await getList()
    return res.status(200).json(list)
  } catch (e) {
    return res.send(e.message)
  }
}

module.exports = callback