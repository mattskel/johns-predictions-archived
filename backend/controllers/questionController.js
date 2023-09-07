/**
 * 
const Question = require('../models/questionModel');
const mongoose = require('mongoose');
*/
import Question from '../models/questionModel';
import mongoose from 'mongoose';

export const createQuestion = async (req, res) => {
  const {text, prospectiveId, options} = req.body;

  const emptyFields = [];

  if (!text) {
    emptyFields.push('text');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in the required fields', emptyFields});
  }

  try {
    const question = await Question.create({text, prospectiveId, options});
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

export const getQuestions = async (req, res) => {
  const {prospectiveId} = req.query;

  let query = {}
  if (prospectiveId) {
    query.prospectiveId = prospectiveId
  }

  const questions = await Question.find(query).sort({createdAt: -1});

  res.status(200).json(questions);
}

export const deleteQuestion = async (req, res) => {
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

export const updateQuestion = async (req, res) => {
  const {id} = req.params;
  const update = req.body || {};

  const question = await Question.findOneAndUpdate({_id: id}, {...update});
  if (!question) {
    return res.status(400).json({error: 'Question not found'});
  }

  res.status(200).json(question)
}

// module.exports = {
//   createQuestion,
//   getQuestions,
//   deleteQuestion,
//   updateQuestion
// }

// export default {
//   createQuestion,
//   getQuestions,
//   deleteQuestion,
//   updateQuestion
// }