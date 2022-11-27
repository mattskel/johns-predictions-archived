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
  const questions = await Question.find({}).sort({createdAt: -1});

  res.status(200).json(questions);
}

module.exports = {
  createQuestion,
  getQuestions
}