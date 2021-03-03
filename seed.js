const db = require('./models')

const newUsers = [
  {
    name: 'Gorbal Redunk',
    username: 'GlenChutney',
    email: '69buttserfer4lyfe@yikes.com',
    password: 'butterfingers',
    age: 69
  },
  {
    name: 'REinkldf',
    username: 'asdf',
    email: 'yuppie@yikes.com',
    password: 'asdfasdf',
    age: 69
  },
  {
    name: 'gynky yinky',
    username: 'asdffdasdf',
    email: 'asdgasdfasdf@yikes.com',
    password: 'asdfas',
    age: 69
  },
  {
    name: 'Jeremy Redunk',
    username: 'howard',
    email: 'gdgdgdgdgd@yikes.com',
    password: 'uhoh',
    age: 69
  },
]


db.Hobby.deleteMany({}, (err, deletedUsers) => {
  if (err){
    console.log(err);
    process.exit()
  }
  console.log('Users deleted successfully')
  db.User.create(newUsers, (err, allUsers) => {
    if (err) {
      console.log(err);
      process.exit()
    }
    console.log(`Created ${allUsers.length} users successfully.`)
    process.exit()

  })
})