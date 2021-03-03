const db = require('../models');

const index = (req, res) => {
  if (!req.session.currentUser){
    //redirect
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Session.find({
    $and: [
      {user: req.session.currentUser._id},
      {hobby: req.query.hobby}
    ]
  }, (err, allSessions) => {
    if(err) return console.log(err);
    res.json(allSessions)
  })
}

const show = (req, res) => {
  if (!req.session.currentUser){
    //redirect
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Session.findById(req.params.id, (err, foundSession) => {
    if (err) return console.log(err);
    res.json(foundSession)
  })
}

const create = (req, res) => {
  if (!req.session.currentUser){
    //redirect
    res.status(400);
    res.send('Not logged In')
    return;
  }
  const sessionObj = req.body;
  sessionObj.user = req.session.currentUser._id
  sessionObj.hobby = req.query.hobby
  db.Session.create(sessionObj, (err, newSession) => {
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
