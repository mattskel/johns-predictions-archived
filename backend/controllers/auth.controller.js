import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

const createToken = (_id) => {
  return jwt.sign({_id}, config.jwtSecret);
}

export const signin = async (req, res) => {
  const {email, password} = req.body;
  try {
    let user = await User.findOne({
      "email": req.body.email
    })
    // const {isAdmin} = user

    if (!user) {
      return res.status('401').json({
        error: "User not found"
      })
    }

    if (!user.authenticate(password)) {
      return res.status('401').send({
        error: "Email and password don't match."
      })
    }

    // create a token
    const token = createToken(user._id);
    // res.status(200).json({email, token});
    res.cookie("t", token, {
      expire: new Date() + 9999
    });
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.username,
        email: user.email
      }
    })
  } catch(error) {
    res.status(401).json({error: 'Could not sign in'})
  }
}

export default {
  signin
}