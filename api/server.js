const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

const server = express()

// global middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

// routers
server.use('/api', authRouter)
server.use('/api/users', usersRouter)

module.exports = server