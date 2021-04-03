'use strict'

const mongoose = require('mongoose')
const conex = mongoose.connection
const {URI_MONGODB, NAME_MONGODB}= process.env

conex.on('error', (err) => {
  console.error(`Connection error ${err}`)
  process.exit(1)
})
conex.on('open', () => console.log(`Connection ${conex.name}`))

mongoose.connect(`${URI_MONGODB+NAME_MONGODB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})

module.exports = conex