const Option = require('../models/optionModel');
const mongoose = require('mongoose');

const createOption = async (req, res) => {
  const {text, questionId} = req.body;
  console.log('text', text);
  console.log('questionId', questionId)

  const emptyFields = [];

  if (!text) {
    emptyFields.push('text');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in the required fields', emptyFields});
  }

  try {
    const option = await Option.create({text, questionId});
    res.status(200).json(option);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const getOptions = async (req, res) => {
  const {questionId} = req.query;

  let query = {}
  if (questionId) {
    query.questionId = questionId
  }

  const options = await Option.find(query).sort({createdAt: -1});

  res.status(200).json(options);
}

const deleteOption = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Id is not valid'});
  }

  const option = await Option.findOneAndDelete({_id: id});
  if (!option) {
    return res.status(400).json({error: 'Option not found'});
  }

  res.status(200).json(option);
}

const updateOption = async (req, res) => {
  const {id} = req.params;
  const update = req.body || {};

  const option = await Option.findOneAndUpdate({_id: id}, {...update});
  if (!option) {
    return res.status(400).json({error: 'Option not found'});
  }

  res.status(200).json(option)
}

module.exports = {
  createOption,
  getOptions,
  deleteOption,
  updateOption
}