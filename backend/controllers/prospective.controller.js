/**
 * 
const Prospective = require('../models/prospectiveModel.js');
const Question = require('../models/questionModel.js');
const Prediction = require('../models/predictionModel');
const mongoose = require('mongoose');
*/
import Prospective from '../models/prospective.model.js';
import Question from '../models/questionModel.js';
import Prediction from '../models/predictionModel.js';
import mongoose from 'mongoose';

const createProspective = async (req, res) => {
  const {title} = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in the required fields', emptyFields});
  }

  try {
    const prospective = await Prospective.create({title});
    res.status(200).json(prospective);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const getPropsectives = async (req, res) => {

  let query = {}
  const prospectives = await Prospective.find(query).sort({createdAt: -1});

  res.status(200).json(prospectives);
}

// The submission from the prospective
export const submitProspective = async (req, res) => {
  const {id: prospectiveId} = req.params;
  const submission = req.body

  // Validation
  // Get the questions for this prospective
  const emptyFields = [];
  const questions = await Question.find({prospectiveId}, {_id: 1});
  questions.forEach(({_id}) => {
    const questionId = _id.toString();
    if (submission[questionId] === undefined) {
      emptyFields.push(questionId)
    }
  });

  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields});
  }

  // Finally can insert the Answers
  const insertArray = [];
  const userId = req.user._id;
  Object.keys(submission).map((questionId) => {
    const prediction = submission[questionId];
    insertArray.push({
      userId,
      questionId,
      prediction
    })
  });

  try {
    const predictions = await Promise.all(insertArray.map((insert) => Prediction.replaceOne({
      userId: insert.userId, questionId: insert.questionId
    }, {...insert}, {upsert: true})));
    res.status(200).json(predictions);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const getPropsective = async (req, res, next, id) => {
  // const {id} = req.params;
  // if (!id) {
  //   return res.status(400).json({error: 'prospectiveId is null or undefined.'});
  // }

  // console.log('prospectiveId', id)

  // // let query = {_id: prospectiveId}
  // const prospective = await Prospective.findById(id);

  // res.status(200).json(prospective);
  try {
    let prospective = await Prospective.findById(id)
    if (!prospective)
      return res.status('400').json({
        error: "Prospective not found"
      })
    req.prospective = prospective
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve prospective"
    })
  }
}

const read = (req, res) => {
  return res.json(req.prospective);
}

const deleteProspective = async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Id is not valid'});
  }

  const prospective = await Prospective.findOneAndDelete({_id: id});
  if (!prospective) {
    return res.status(400).json({error: 'Prospective not found'});
  }

  res.status(200).json(prospective);
}

const getProspectiveQuestionsAndPredictions = async (req, res) => {
  const {id: prospectiveId} = req.params;
  const {_id: userId} = req.user;
  const questions = await Question.find({
    prospectiveId
  }, {
    _id: 1,
    prospectiveId: 1,
    answer: 1, 
    text: 1
  });

  const questionIds = questions.map(({_id}) => _id);
  const predictions = await Prediction.find({
    userId, 
    questionId: {$in: questionIds}
  }, {
    _id: 1,
    prediction: 1,
    questionId: 1,
    userId: 1
  });

  const questionsAndPredictions = questions.map((question) => {
    const {answer, _id: questionId, text} = question;
    const {prediction} = predictions
      .find(({questionId: predictionQuestionId}) => predictionQuestionId.toString() === questionId.toString()) || {};
    return {
      answer,
      questionId,
      text,
      prediction
    }
  });

  res.status(200).json(questionsAndPredictions);
}

// module.exports = {
//   createProspective,
//   getPropsectives,
//   submitProspective,
//   getPropsective,
//   deleteProspective,
//   getProspectiveQuestionsAndPredictions,
// }

export default {
  createProspective,
  getPropsectives,
  submitProspective,
  getPropsective,
  deleteProspective,
  getProspectiveQuestionsAndPredictions,
  read
}
