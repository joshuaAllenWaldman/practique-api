const db = require('../models');
//hobbies/:id/sessions/ 

const index = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Session.find({
    $and: [
      {user: req.session.currentUser._id},
      {hobby: req.params.id}
    ]
  }, (err, allSessions) => {
    if(err) return console.log(err);
    res.json(allSessions)
  })
}

const show = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Session.findById(req.params.seshId, (err, foundSession) => {
    if (err) return console.log(err);
    res.json(foundSession)
  })
}

const create = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  console.log('create route hit after login validation')
  const sessionObj = req.body;
  sessionObj.user = req.session.currentUser._id
  sessionObj.hobby = req.params.id
  // console.log('++++++++++++++++', req)
  console.log('req params', req.params)
  db.Session.create(sessionObj, (err, newSession) => {
    if(err) return console.log(err);
    res.json(newSession);
  })
}

const update = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  
  db.Session.findByIdAndUpdate(
    req.params.seshId,
    req.body,
    {new: true},
    (err, updatedSession) => {
      if (err) return console.log(err);
      res.json(updatedSession)
    }
  )
}

const destroy = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Session.findByIdAndDelete(req.params.seshId, (err, deletedSession) => {
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
