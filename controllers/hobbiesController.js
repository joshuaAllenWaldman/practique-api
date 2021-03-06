const db = require('../models');

//Hobby index, checks for login status first
const index = (req, res) => {
  if (!req.session.currentUser){
    //redirect
    res.status(400);
    res.send('Not logged In')
    return;
  }
  //Finds hobbies associated with current user
  db.Hobby.find({user: req.session.currentUser._id}, 
    (err, allHobbies) => {
      if (err) return console.log(err);
      res.json(allHobbies);
    })
}

const show = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  //Finds hobby matching current param id and belonging to user
  db.Hobby.findOne({
    $and: [
      {user: req.session.currentUser._id},
      {_id: req.params.id}
    ]
  }, (err, foundHobby) => {
    if(err) console.log(err);
    res.json(foundHobby)
  })
}

const create = (req, res) => {
  if (!req.session.currentUser){
    //redirect
    res.status(400);
    res.send('Not logged In')
    return;
  }
  const hobbyObj = req.body;
  hobbyObj.user = req.session.currentUser._id  
  db.Hobby.create(hobbyObj, (err, newHobby) => {
    if (err) return console.log(err)
    res.json(newHobby)
  })
}

const update = (req, res) => {
  if (!req.session.currentUser){
    //redirect
    res.status(400);
    res.send('Not logged In')
    return;
  }
  console.log(req.params)
  db.Hobby.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedHobby) => {
      if (err) return console.log(err)
      console.log('Hit Update', updatedHobby)
      res.json(updatedHobby)
    }
  )
}

const destroy = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Session.deleteMany({hobby: req.params.id}, (err, deletedSessions) => {
    if (err) return console.log(err)
    db.Hobby.findByIdAndDelete(req.params.id, (err, deletedHobby) => {
    if (err) return console.log(err);
    res.status(200)
  })
  }) 
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}