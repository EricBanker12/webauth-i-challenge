const db = require('../../database/db')

module.exports = {find}

function find(item) {
    if (item) {
        return db('users').select('username').where(item).first()
    }
    else return db('users').select('username')
}