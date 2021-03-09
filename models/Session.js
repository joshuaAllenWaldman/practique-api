const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
  nickName: {
    type: String, 
  },
  hobby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobby',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  challengeLevel: {
    type: Number,
    default: 1
  },
  notes: {
    type: String,
  },
  sessionGoals: {
    type: [String],
  },
  startTime: {
    type: Date,
    default: Date.now()
  },
  duration: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true})

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session