exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('class_id').references('classes.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
