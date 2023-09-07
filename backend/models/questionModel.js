// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  prospectiveId: {
    type: String
  },
  answer: {
    type: String
  },
  options: {
    type: [String]
  }
}, {timestamps: true})

const Question = mongoose.model('Question', questionSchema);
// module.exports = Question;
export default Question;