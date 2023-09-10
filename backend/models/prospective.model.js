// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const prospectiveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Prospective = new mongoose.model('Prospective', prospectiveSchema);
// module.exports = Prospective;
export default Prospective;