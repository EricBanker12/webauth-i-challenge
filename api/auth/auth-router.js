const router = require('express').Router()

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

module.exports = router