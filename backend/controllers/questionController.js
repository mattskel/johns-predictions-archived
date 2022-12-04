const Question = require('../models/questionModel');
const mongoose = require('mongoose');

const createQuestion = async (req, res) => {
  const {text} = req.body;

  const emptyFields = [];

  if (!text) {
    emptyFields.push('text');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in the required fields', emptyFields});
  }

  try {
    const question = await Question.create({text});
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const getQuestions = async (req, res) => {
  const {prospectiveId} = req.query;

  let query = {}
  if (prospectiveId) {
    query.prospectiveId = prospectiveId
  }

  const questions = await Question.find(query).sort({createdAt: -1});

  res.status(200).json(questions);
}

const deleteQuestion = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Id is not valid'});
  }

  const question = await Question.findOneAndDelete({_id: id});
  if (!question) {
    return res.status(400).json({error: 'Question not found'});
  }

  res.status(200).json(question);
}

const updateQuestion = async (req, res) => {
  const {id} = req.params;
  const update = req.body || {};

  const question = await Question.findOneAndUpdate({_id: id}, {...update});
  if (!question) {
    return res.status(400).json({error: 'Question not found'});
  }

  res.status(200).json(question)
}

module.exports = {
  createQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion
}