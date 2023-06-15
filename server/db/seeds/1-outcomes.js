exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('outcomes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('outcomes').insert([
        { id: 1, outcome: '(Critical Failure) You push your code to production without testing. A multitude of bugs appear and you now have to spend the entire night fixing them'},
        { id: 2, outcome: 'You accidentally delete the database while trying to drop a single table. Spend next turn restoring it.' },
        { id: 3, outcome: 'You misinterpret the project managers requirements and implement the wrong feature. Back to the drawing board!' },
        { id: 4, outcome: 'Your coffee spills over your keyboard. Lose a turn while you clean up and find a replacement'},
        { id: 5, outcome: ' You mistype a command and your terminal crashes. Restart your turn.' },
        { id: 6, outcome: 'You are stuck on a problem and decide to ask on StackOverflow. Your question is downvoted and closed as duplicate.' },
        { id: 7, outcome: ' A wild bug appears! It is a typescript error. You spend your turn hunting it down.'},
        { id: 8, outcome: ' You push a minor update and it accidentally breaks the whole system. Go back 2 spaces as you scramble to roll back changes.' },
        { id: 9, outcome: 'You are trying to install a new library but dependency issues appear. Your next turn will be spent resolving them.' },
        { id: 10, outcome: 'Your IDE crashes and all unsaved work is lost. Miss a turn while you restart and try to remember what you just wrote.' },
        { id: 11, outcome: 'Your "quick fix" successfully patches the bug! Move forward 1 space' },
        { id: 12, outcome: 'Your coworker resolves one of your assigned bugs. You thank them and move forward 1 space.'},
        { id: 13, outcome: 'You get into a zone and refactor some messy code. Move forward 2 spaces.' },
        { id: 14, outcome: 'You find a clever solution to a problem and document it. Move forward 2 spaces.'},
        { id: 15, outcome: 'You make some improvements that significantly optimize the applications performance. Move forward 3 spaces.' },
        { id: 16, outcome: 'Your pull request is accepted without any changes. Move forward 3 spaces' },
        { id: 17, outcome: ' You implement a new feature that the users love. Move forward 4 spaces.' },
        { id: 18, outcome: 'You find a hidden bug that has been causing subtle issues. The team praises your debugging skills. Move forward 4 spaces.' },
        { id: 19, outcome: 'Your code passes all tests on the first try. You are in disbelief. Move forward 5 spaces.' },
        { id: 20, outcome: ' (Critical Success) Your revolutionary idea for a new feature gets approved by management. It is a big win! Move forward 6 spaces and take another turn.'},   
      ])
    })
}
