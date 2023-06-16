exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary()
    table.string('class_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('classes')
}
