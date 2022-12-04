const Prospective = require('../models/prospectiveModel.js');

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

module.exports = {
  createProspective,
  getPropsectives
}
