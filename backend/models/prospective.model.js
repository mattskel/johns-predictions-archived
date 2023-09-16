// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const prospectiveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    default: false
  },
  isClosed: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

const Prospective = new mongoose.model('Prospective', prospectiveSchema);
// module.exports = Prospective;
export default Prospective;