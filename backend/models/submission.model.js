import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  prospectiveId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;