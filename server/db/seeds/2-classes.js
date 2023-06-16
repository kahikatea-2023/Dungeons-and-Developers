exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { class_name: 'The Introvert' },
        { class_name: 'The brogrammer' },
        { class_name: 'The Hacker' },
        { class_name: 'The chatgpt guy' },
        { class_name: 'The old school developer' },
        { class_name: 'It works on my machine guy' },
      ])
    })
}
