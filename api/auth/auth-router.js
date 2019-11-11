const router = require('express').Router()
const bcrypt = require('bcryptjs')

const db = require('./auth-model')

const {validateBody, validateUnique, validateUsername, hashPassword, validatePassword} = require('./auth-middleware')

router.post('/register', validateBody, validateUnique, hashPassword, (req, res) => {
    db.add(res.locals.user)
        .then(resp => {
            res.status(201).json({id: resp[0]})
        })
        .catch(err => {
            console.error(err)
            res.sendStatus(500)
        })
})

router.post('/login', validateBody, validateUsername, validatePassword, (req, res) => {
    const {username, id} = res.locals.user
    
    res.json({message: `Hello ${username}`, id})
})

module.exports = router