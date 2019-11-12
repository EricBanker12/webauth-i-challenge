
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments().unique().notNullable()
      tbl.string('username', 63).unique().notNullable()
      tbl.string('password').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
};
