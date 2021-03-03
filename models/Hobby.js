const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  skillLevel: {
    type: String,
    default: 'Beginner'
  },
  longTermGoals: {
    type: [String]
  },
}, {timestamps: true})

const Hobby = mongoose.model('Hobby', hobbySchema)

module.exports = Hobby;