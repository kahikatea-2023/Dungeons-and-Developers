exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('classes')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('classes').insert([
           {id: 1, class_name: 'The Introvert'},
           {id: 2,class_name: 'The brogrammer'},
           {id: 3,class_name: 'The Hacker'},
           {id: 4,class_name: 'The chatgpt guy'},
           {id: 5,class_name: 'The old school developer'},
           {id: 6,class_name: 'It works on my machine guy'}
        ])
      })
  }