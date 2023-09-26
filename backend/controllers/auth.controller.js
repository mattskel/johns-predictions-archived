import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt'
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
    res.cookie("t", token, {
      expire: new Date() + 9999
    });
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      }
    })
  } catch(error) {
    res.status(401).json({error: 'Could not sign in'})
  }
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
  message: "signed out"
  })
 }

 const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth'
 })

 const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }

  next()
}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}