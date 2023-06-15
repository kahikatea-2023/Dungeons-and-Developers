exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('outcomes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('outcomes').insert([
        { outcome: 'banana' },
        { outcome: 'appple' },
        { outcome: 'pear' },
        { outcome: 'grape' },
        { outcome: 'mango' },
        { outcome: 'orange' },
        { outcome: 'mandarin' },
        { outcome: 'dragonfruit' },
        { outcome: 'passionfruit' },
        { outcome: 'tangerine' },
        { outcome: 'pineapple' },
        { outcome: 'tamarillo' },
        { outcome: 'watermelon' },
        { outcome: 'starberry' },
        { outcome: 'strawberry' },
        { outcome: 'kiwifruit' },
        { outcome: 'persimmon' },
        { outcome: 'lychee' },
        { outcome: 'guava' },
        { outcome: 'pomegranate' },   
      ])
    })
}
