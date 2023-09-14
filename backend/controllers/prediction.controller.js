// const Prediction = require('../models/predictionModel');
import Prediction from '../models/predictionModel';

const getPredictions = async (req, res) => {
  console.log('req', req)

  // const {prospectiveId} = req;
  // const {_id: userId} = req.user;
  const {_id: userId} = req.profile;
  const {_id: prospectiveId} = req.prospective;

  let query = {}
  // if (prospectiveId) {
  //   query.prospectiveId = prospectiveId;
  // }

  const predictions = await Prediction.find(query).sort({createdAt: -1});

  res.status(200).json(predictions);
}

export default { getPredictions }
