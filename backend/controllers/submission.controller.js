import Submission from '../models/submission.model';

const create = async (req, res, next) => {
  const {prospectiveId} = req.params;
  const {_id: userId} = req.profile;

  const submissionDoc = new Submission({
    userId,
    prospectiveId,
  });

  try {
    await submissionDoc.save();
    next();
  } catch (err) {
    console.log('err', err)
    return res.status(400).json({error: err.message})
  }

}

const update = async (req, res, next) => {
  const {prospectiveId} = req.params;
  const {_id: userId} = req.profile;
  try {
    await Submission.findOneAndUpdate({
      userId,
      prospectiveId,
    }, {
      $set: {
        updatedAt: Date.now(),
      }
    })
    next();
  } catch (err) {
    console.log('err', err);
    return res.status(400).json({error: err.message})
  }
}

const listForUser = async (req, res, next) => {
  // const {id} = req.params;
  const {_id: userId} = req.profile;
  try {
    const submissions = await Submission.find({userId});
    res.status(200).json(submissions);
  } catch (err) {
    console.log('err', err);
    return res.status(400).json({error: err.message})
  }
}

export default {
  create,
  update,
  listForUser,
}