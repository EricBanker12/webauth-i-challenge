const router = require('express').Router()

const db = require('./users-model')
const {validateHeaders} = require('./users-middleware')
const {validateUsername, validatePassword} = require('../auth/auth-middleware')

router.get('/', validateHeaders, validateUsername, validatePassword, (req, res) => {
    db.find()
        .then(resp => res.json(resp))
        .catch(err => {
            console.error(err)
            res.sendStatus(500)
        })
})

module.exports = router