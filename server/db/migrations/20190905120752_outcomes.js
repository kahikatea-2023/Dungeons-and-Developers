exports.up = function (knex) {
  return knex.schema.createTable('outcomes', (table) => {
    table.integer('id')
    table.string('outcome')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('outcomes')
}
