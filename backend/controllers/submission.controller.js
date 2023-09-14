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

export default {
  create,
}