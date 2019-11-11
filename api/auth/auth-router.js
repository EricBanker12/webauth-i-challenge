const router = require('express').Router()
const bcrypt = require('bcryptjs')

const db = require('./auth-model')

const {validateBody, validateUsername, hashPassword} = require('./auth-middleware')

router.post('/register', validateBody, validateUsername, hashPassword, (req, res) => {
    db.add(res.locals.user)
        .then(resp => {
            res.status(201).json({id: resp[0]})
        })
        .catch(err => {
            console.error(err)
            res.sendStatus(500)
        })
})

router.post('/login', validateBody, (req, res) => {
    const {username, password} = res.locals.user

    db.find({username})
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, match) => {
                    if (err) {
                        throw err
                    }
                    else {
                        if (match) res.json({message: `Hello ${user.username}`, id: user.id})
                        else res.status(401).json({message: 'You shall not pass!'})
                    }
                })
            }
            else res.status(401).json({message: 'You shall not pass!'})
        })
        .catch(err => {
            console.error(err)
            res.sendStatus(500)
        })
})

module.exports = router