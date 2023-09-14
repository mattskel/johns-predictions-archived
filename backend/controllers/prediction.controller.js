// const Prediction = require('../models/predictionModel');
import Prediction from '../models/predictionModel';

const getPredictions = async (req, res) => {
  // console.log('req', req)

  // const {prospectiveId} = req;
  // const {_id: userId} = req.user;
  const {_id: userId} = req.profile;
  const {_id: prospectiveId} = req.prospective;

  let query = {prospectiveId, userId};
  // if (prospectiveId) {
  //   query.prospectiveId = prospectiveId;
  // }

  const predictions = await Prediction.find(query).sort({createdAt: -1});

  res.status(200).json(predictions);
}

const createPredictions = async (req, res) => {
  const {prospectiveId} = req.params;
  const {_id: userId} = req.profile;
  const predictions = req.body;

  console.log('predictions', predictions)

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

export default { getPredictions, createPredictions }
