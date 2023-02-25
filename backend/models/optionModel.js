const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  questionId: {
    type: String
  },
  // options: {
  //   type: [String],
  //   default: undefined
  // }
}, {timestamps: true})

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;