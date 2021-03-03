const db = require('../models');

const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if(err) return console.log(err);
    res.json(allUsers)
  })  
}

const show = (req, res) => {
  db.User.findById(req.params.id, (err, foundUser) => {
    if (err) console.log(err);
    res.json(foundUser)
  })
}

const create = (req, res) => {
  console.log(req.body)
  db.User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
    res.json(newUser)
  })
}

const update = (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) return console.log(err)
      res.json(updatedUser)
    }
  )
}

const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) return console.log(err);
    res.json(deletedUser)
  })
}

const login = (req, res) => {
  db.User.findOne({username: req.body.username}, (err, foundUser) => {
    if (!foundUser) return console.log('no user found') 
    if (req.body.password === foundUser.password){
      req.session.currentUser = foundUser;
      res.json(foundUser)
      return console.log('logged in.')
    }
  })
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  login
}