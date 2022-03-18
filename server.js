const app = require('./app')

const port = 3333

const serverStart = () => {
  try {
    app.listen(port, () => {
      console.log('mock api server start')
    })
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

serverStart()