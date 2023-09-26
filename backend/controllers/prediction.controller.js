import Prediction from '../models/predictionModel';

const getPredictions = async (req, res) => {
  const {_id: userId} = req.profile || {};
  const {_id: prospectiveId} = req.prospective || {};

  let query = {prospectiveId};
  if (userId) {
    query.userId = userId;
  }

  const predictions = await Prediction.find(query).sort({createdAt: -1});

  res.status(200).json(predictions);
}

const createPredictions = async (req, res) => {
  const {prospectiveId} = req.params;
  const {_id: userId} = req.profile;
  const predictions = req.body;

  const predictionDocs = Object.keys(predictions).map((questionId) => {
    return new Prediction({
      userId,
      questionId,
      prediction: predictions[questionId],
      prospectiveId,
    });
  });

  const prediction = await Promise.all(predictionDocs.map((predictionDoc) => {
    return predictionDoc.save();
  } ));

  res.status(200).json(prediction);
}

const update = async (req, res) => {
  const {_id: userId} = req.profile || {};
  const {_id: prospectiveId} = req.prospective || {};
  const submission = req.body;

  /**
   * Not doing validation yet
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
  */

  // Finally can insert the Answers
  const insertArray = [];
  // const userId = req.user._id;
  Object.keys(submission).map((questionId) => {
    const prediction = submission[questionId];
    insertArray.push({
      userId,
      questionId,
      prediction
    })
  });


  try {
    const predictions = await Promise.all(insertArray.map((insert) => Prediction.findOneAndUpdate({
      userId: insert.userId, questionId: insert.questionId
    }, {...insert})));
    res.status(200).json(predictions);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

export default { getPredictions, createPredictions, update }
