const knex = require('knex')

const config = require('../../knexfile')

const db = knex(config.development)

module.exports = {find}

function find(item) {
    if (item) {
        return db('users').select('username').where(item).first()
    }
    else return db('users').select('username')
}