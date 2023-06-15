exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id')
    table.string('class_name').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('classes')
}
