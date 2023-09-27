// const mongoose = require('mongoose');
import mongoose from 'mongoose';

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
  },
  prospectiveId: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Prediction = mongoose.model('Prediction', predictionSchema);
export default Prediction;