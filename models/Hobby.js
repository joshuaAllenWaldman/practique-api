const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  skillLevel: {
    type: String,
    default: 'Beginner'
  },
  longTermGoals: {
    type: [String]
  },
  practiceHourTracker: {
    type: Number,
    default: 0
  },
  sessionCount: {
    type: Number,
    default: 0 
  },
}, {timestamps: true})

const Hobby = mongoose.model('Hobby', hobbySchema)

module.exports = Hobby;