const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

const {validateSession} = require('./users/users-middleware')

const server = express()

// global middleware
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session({
    name: 'session',
    secret: process.env.SECRET || 'secret key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 18, // 18 hours
        secure: process.env.SECRET ? true : false,
    }
}))

// routers
server.use('/api', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/restricted', validateSession)

server.get('/api/restricted/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


module.exports = server