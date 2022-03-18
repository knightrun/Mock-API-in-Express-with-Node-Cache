const express = require('express')
const cors = require('cors')

class App {
  constructor() {
    this.app = express()
    this.setMiddleWare()
    this.getRouting()
    this.status404()
    this.errorHandler()
  }

  setMiddleWare() {
    this.app.use(cors())
  }

  getRouting() {
    this.app.use(require('./routers'))
  }

  status404() {
    this.app.use((req, res) => {
      res.status(404).send('Invalid api path')
    })
  }

  errorHandler() {
    this.app.use((req, res) => {
      res.status(500).send('Something broke!')
    })
  }
}

module.exports = new App().app