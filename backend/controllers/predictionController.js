const Prediction = require('../models/predictionModel');

const getPredictions = async (req, res) => {

  const {prospectiveId} = req.query;
  const {_id: userId} = req.user;

  let query = {userId}
  if (prospectiveId) {
    query.prospectiveId = prospectiveId;
  }

  const predictions = await Prediction.find(query).sort({createdAt: -1});

  res.status(200).json(predictions);
}

module.exports = {
  getPredictions
}