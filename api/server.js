const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

// global middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

// routers

module.exports = server