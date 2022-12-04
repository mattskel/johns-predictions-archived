const mongoose = require('mongoose');

const prospectiveSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Prospective = new mongoose.model('Prospective', prospectiveSchema);
module.exports = Prospective;