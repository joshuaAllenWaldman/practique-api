const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
  nickName: {
    type: String  
  },
  hobby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobby',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  challengeLevel: {
    type: Number,
    default: 0
  },
  notes: {
    type: String,
  },
  sessionGoals: {
    type: [String],
  },
  startTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    default: 0
  }
}, {timestamp: true})

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session