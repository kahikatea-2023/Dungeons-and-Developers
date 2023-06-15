exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,  name: 'user1', class_id: '1' },
        { id: 2,  name: 'user2', class_id: '2' },
        { id: 3,  name: 'user3', class_id: '3' },
      ])
    })
}
