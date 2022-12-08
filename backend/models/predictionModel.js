const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  questionId: {
    type: String,
    required: true
  },
  prediction: {
    type: String
  }
}, {timestamps: true});

const Prediction = mongoose.model('Prediction', predictionSchema);
module.exports = Prediction;