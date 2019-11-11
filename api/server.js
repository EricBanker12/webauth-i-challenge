const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

const {validateUsername, validatePassword} = require('./auth/auth-middleware')
const {validateHeaders} = require('./users/users-middleware')

const server = express()

// global middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

// routers
server.use('/api', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/restricted', validateHeaders, validateUsername, validatePassword)

server.get('/api/restricted/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


module.exports = server