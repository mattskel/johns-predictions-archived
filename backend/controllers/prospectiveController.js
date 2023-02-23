const Prospective = require('../models/prospectiveModel.js');
const Question = require('../models/questionModel.js');
const Prediction = require('../models/predictionModel');
const mongoose = require('mongoose');

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
const submitProspective = async (req, res) => {
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

const getPropsective = async (req, res) => {
  const {id: prospectiveId} = req.params;
  if (!prospectiveId) {
    return res.status(400).json({error: 'prospectiveId is null or undefined.'});
  }

  let query = {_id: prospectiveId}
  const prospective = await Prospective.findOne(query);

  res.status(200).json(prospective);
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

module.exports = {
  createProspective,
  getPropsectives,
  submitProspective,
  getPropsective,
  deleteProspective
}
