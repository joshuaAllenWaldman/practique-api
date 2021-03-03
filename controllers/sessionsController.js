const db = require('../models');

const index = (req, res) => {
  db.Session.find({}, (err, allSessions) => {
    if(err) return console.log(err);
    res.json(allSessions)
  })
}

const show = (req, res) => {
  db.Session.findById(req.params.id, (err, foundSession) => {
    if (err) return console.log(err);
    res.json(foundSession)
  })
}

const create = (req, res) => {
  db.Session.create(req.body, (err, newSession) => {
    if(err) return console.log(err);
    res.json(newSession);
  })
}

const update = (req, res) => {
  db.Session.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedSession) => {
      if (err) return console.log(err);
      res.json(updatedSession)
    }
  )
}

const destroy = (req, res) => {
  db.Session.findByIdAndDelete(req.params.id, (err, deletedSession) => {
    if (err) return console.log(err);
    res.json(deletedSession)
  })
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
