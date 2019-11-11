const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')

const server = express()

// global middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

// routers
server.use('/api', authRouter)

module.exports = server