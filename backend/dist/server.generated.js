/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers.js":
/*!************************!*\
  !*** ./controllers.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const User = __webpack_require__(/*! ./models */ \"./models.js\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n// get a single user\nconst getUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await User.findById(id);\n  if (!user) {\n    return res.status(404).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// create a new user\nconst createUser = async (req, res) => {\n  const {\n    username,\n    password,\n    email\n  } = req.body;\n  const emptyFields = [];\n  if (!username) {\n    emptyFields.push('username');\n  }\n  if (!password) {\n    emptyFields.push('password');\n  }\n  if (!email) {\n    emptyFields.push('email');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // add doc to db\n  try {\n    const user = await User.create({\n      username,\n      password,\n      email\n    });\n    res.status(200).json(user);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// delete a user\nconst deleteUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await User.findOneAndDelete({\n    _id: id\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// update a user\nconst updateUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await User.findOneAndUpdate({\n    _id: id\n  }, {\n    ...req.body\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// get all the users\nconst getUsers = async (req, res) => {\n  const users = await User.find({}).sort({\n    createdAt: -1\n  });\n  res.status(200).json(users);\n};\nconst createToken = _id => {\n  return jwt.sign({\n    _id\n  }, process.env.SECRET, {\n    expiresIn: '3d'\n  });\n};\n\n// login user\nconst loginUser = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    const user = await User.login(email, password);\n    const {\n      isAdmin\n    } = user;\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({\n      email,\n      token,\n      isAdmin\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// signup user\nconst signupUser = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    const user = await User.signup(email, password);\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({\n      email,\n      token\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nmodule.exports = {\n  getUser,\n  createUser,\n  deleteUser,\n  updateUser,\n  getUsers,\n  loginUser,\n  signupUser\n};\n\n//# sourceURL=webpack://backend/./controllers.js?");

/***/ }),

/***/ "./controllers/predictionController.js":
/*!*********************************************!*\
  !*** ./controllers/predictionController.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Prediction = __webpack_require__(/*! ../models/predictionModel */ \"./models/predictionModel.js\");\nconst getPredictions = async (req, res) => {\n  const {\n    prospectiveId\n  } = req.query;\n  const {\n    _id: userId\n  } = req.user;\n  let query = {\n    userId\n  };\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const predictions = await Prediction.find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(predictions);\n};\nmodule.exports = {\n  getPredictions\n};\n\n//# sourceURL=webpack://backend/./controllers/predictionController.js?");

/***/ }),

/***/ "./controllers/prospectiveController.js":
/*!**********************************************!*\
  !*** ./controllers/prospectiveController.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Prospective = __webpack_require__(/*! ../models/prospectiveModel.js */ \"./models/prospectiveModel.js\");\nconst Question = __webpack_require__(/*! ../models/questionModel.js */ \"./models/questionModel.js\");\nconst Prediction = __webpack_require__(/*! ../models/predictionModel */ \"./models/predictionModel.js\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst createProspective = async (req, res) => {\n  const {\n    title\n  } = req.body;\n  const emptyFields = [];\n  if (!title) {\n    emptyFields.push('title');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const prospective = await Prospective.create({\n      title\n    });\n    res.status(200).json(prospective);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsectives = async (req, res) => {\n  let query = {};\n  const prospectives = await Prospective.find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(prospectives);\n};\n\n// The submission from the prospective\nconst submitProspective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const submission = req.body;\n\n  // Validation\n  // Get the questions for this prospective\n  const emptyFields = [];\n  const questions = await Question.find({\n    prospectiveId\n  }, {\n    _id: 1\n  });\n  questions.forEach(({\n    _id\n  }) => {\n    const questionId = _id.toString();\n    if (submission[questionId] === undefined) {\n      emptyFields.push(questionId);\n    }\n  });\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // Finally can insert the Answers\n  const insertArray = [];\n  const userId = req.user._id;\n  Object.keys(submission).map(questionId => {\n    const prediction = submission[questionId];\n    insertArray.push({\n      userId,\n      questionId,\n      prediction\n    });\n  });\n  try {\n    const predictions = await Promise.all(insertArray.map(insert => Prediction.replaceOne({\n      userId: insert.userId,\n      questionId: insert.questionId\n    }, {\n      ...insert\n    }, {\n      upsert: true\n    })));\n    res.status(200).json(predictions);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  if (!prospectiveId) {\n    return res.status(400).json({\n      error: 'prospectiveId is null or undefined.'\n    });\n  }\n  let query = {\n    _id: prospectiveId\n  };\n  const prospective = await Prospective.findOne(query);\n  res.status(200).json(prospective);\n};\nconst deleteProspective = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const prospective = await Prospective.findOneAndDelete({\n    _id: id\n  });\n  if (!prospective) {\n    return res.status(400).json({\n      error: 'Prospective not found'\n    });\n  }\n  res.status(200).json(prospective);\n};\nconst getProspectiveQuestionsAndPredictions = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const {\n    _id: userId\n  } = req.user;\n  const questions = await Question.find({\n    prospectiveId\n  }, {\n    _id: 1,\n    prospectiveId: 1,\n    answer: 1,\n    text: 1\n  });\n  const questionIds = questions.map(({\n    _id\n  }) => _id);\n  const predictions = await Prediction.find({\n    userId,\n    questionId: {\n      $in: questionIds\n    }\n  }, {\n    _id: 1,\n    prediction: 1,\n    questionId: 1,\n    userId: 1\n  });\n  const questionsAndPredictions = questions.map(question => {\n    const {\n      answer,\n      _id: questionId,\n      text\n    } = question;\n    const {\n      prediction\n    } = predictions.find(({\n      questionId: predictionQuestionId\n    }) => predictionQuestionId.toString() === questionId.toString()) || {};\n    return {\n      answer,\n      questionId,\n      text,\n      prediction\n    };\n  });\n  res.status(200).json(questionsAndPredictions);\n};\nmodule.exports = {\n  createProspective,\n  getPropsectives,\n  submitProspective,\n  getPropsective,\n  deleteProspective,\n  getProspectiveQuestionsAndPredictions\n};\n\n//# sourceURL=webpack://backend/./controllers/prospectiveController.js?");

/***/ }),

/***/ "./controllers/questionController.js":
/*!*******************************************!*\
  !*** ./controllers/questionController.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Question = __webpack_require__(/*! ../models/questionModel */ \"./models/questionModel.js\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst createQuestion = async (req, res) => {\n  const {\n    text,\n    prospectiveId,\n    options\n  } = req.body;\n  const emptyFields = [];\n  if (!text) {\n    emptyFields.push('text');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const question = await Question.create({\n      text,\n      prospectiveId,\n      options\n    });\n    res.status(200).json(question);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getQuestions = async (req, res) => {\n  const {\n    prospectiveId\n  } = req.query;\n  let query = {};\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const questions = await Question.find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(questions);\n};\nconst deleteQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const question = await Question.findOneAndDelete({\n    _id: id\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\nconst updateQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  const update = req.body || {};\n  const question = await Question.findOneAndUpdate({\n    _id: id\n  }, {\n    ...update\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\nmodule.exports = {\n  createQuestion,\n  getQuestions,\n  deleteQuestion,\n  updateQuestion\n};\n\n//# sourceURL=webpack://backend/./controllers/questionController.js?");

/***/ }),

/***/ "./middleware/requireAuth.js":
/*!***********************************!*\
  !*** ./middleware/requireAuth.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst User = __webpack_require__(/*! ../models */ \"./models.js\");\nconst requireAuth = async (req, res, next) => {\n  //verify authentication\n  const {\n    authorization\n  } = req.headers;\n  if (!authorization) {\n    return res.status(401).json({\n      error: 'Authorization token required'\n    });\n  }\n  console.log(req.headers);\n  const [, token] = authorization.split(' ');\n  try {\n    const {\n      _id\n    } = jwt.verify(token, process.env.SECRET);\n    req.user = await User.findOne({\n      _id\n    }).select('_id');\n    next();\n  } catch (error) {\n    console.log(error);\n    res.status(401).json({\n      error: 'Request is not authorized'\n    });\n  }\n};\nmodule.exports = requireAuth;\n\n//# sourceURL=webpack://backend/./middleware/requireAuth.js?");

/***/ }),

/***/ "./models.js":
/*!*******************!*\
  !*** ./models.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst validator = __webpack_require__(/*! validator */ \"validator\");\nconst userSchema = new mongoose.Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String\n    // required: true\n  },\n\n  isAdmin: {\n    type: Boolean\n  }\n}, {\n  timestamps: true\n});\n\n// static signup method\nuserSchema.statics.signup = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  if (!validator.isEmail(email)) {\n    throw Error('Email is not valid');\n  }\n  // if (!validator.isStrongPassword) {\n  //   throw Error('Password is not string enough')\n  // }\n\n  const exists = await this.findOne({\n    email\n  });\n  if (exists) {\n    throw Error('Email already exists');\n  }\n  const salt = await bcrypt.genSalt(10);\n  const hash = await bcrypt.hash(password, salt);\n  const user = await this.create({\n    email,\n    password: hash\n  });\n  return user;\n};\n\n// static login method\nuserSchema.statics.login = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  const user = await this.findOne({\n    email\n  });\n  if (!user) {\n    throw Error('Incorrect email');\n  }\n  const match = await bcrypt.compare(password, user.password);\n  if (!match) {\n    throw Error('Incorrect password');\n  }\n  return user;\n};\nconst User = mongoose.model('User', userSchema);\nmodule.exports = User;\n\n//# sourceURL=webpack://backend/./models.js?");

/***/ }),

/***/ "./models/predictionModel.js":
/*!***********************************!*\
  !*** ./models/predictionModel.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst predictionSchema = new mongoose.Schema({\n  userId: {\n    type: String,\n    required: true\n  },\n  questionId: {\n    type: String,\n    required: true\n  },\n  prediction: {\n    type: String\n  }\n}, {\n  timestamps: true\n});\nconst Prediction = mongoose.model('Prediction', predictionSchema);\nmodule.exports = Prediction;\n\n//# sourceURL=webpack://backend/./models/predictionModel.js?");

/***/ }),

/***/ "./models/prospectiveModel.js":
/*!************************************!*\
  !*** ./models/prospectiveModel.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst prospectiveSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Prospective = new mongoose.model('Prospective', prospectiveSchema);\nmodule.exports = Prospective;\n\n//# sourceURL=webpack://backend/./models/prospectiveModel.js?");

/***/ }),

/***/ "./models/questionModel.js":
/*!*********************************!*\
  !*** ./models/questionModel.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst questionSchema = new mongoose.Schema({\n  text: {\n    type: String,\n    required: true\n  },\n  prospectiveId: {\n    type: String\n  },\n  answer: {\n    type: String\n  },\n  options: {\n    type: [String]\n  }\n}, {\n  timestamps: true\n});\nconst Question = mongoose.model('Question', questionSchema);\nmodule.exports = Question;\n\n//# sourceURL=webpack://backend/./models/questionModel.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n// const User = require('./models')\nconst {\n  createUser,\n  getUser,\n  deleteUser,\n  updateUser,\n  getUsers,\n  loginUser,\n  signupUser\n} = __webpack_require__(/*! ./controllers */ \"./controllers.js\");\nconst requireAuth = __webpack_require__(/*! ./middleware/requireAuth */ \"./middleware/requireAuth.js\");\nconst router = express.Router();\n\n// login route\nrouter.post('/login', loginUser);\n\n// signup router\nrouter.post('/signup', signupUser);\n\n/**\n * Don't need auth for login and signup\n * Normally login and signup would be in a different route file\n * Because they are in the same file need to put them before the auth\n */\n\n// require auth for all routes\nrouter.use(requireAuth);\n\n// POST a new user\nrouter.post('/', createUser);\n\n// GET an existing user\nrouter.get('/:id', getUser);\n\n// GET all users\nrouter.get('/', getUsers);\n\n// DELETE a user\nrouter.delete('/:id', deleteUser);\n\n// PATCH a user\nrouter.patch('/:id', updateUser);\nmodule.exports = router;\n\n//# sourceURL=webpack://backend/./routes.js?");

/***/ }),

/***/ "./routes/predictions.js":
/*!*******************************!*\
  !*** ./routes/predictions.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst {\n  getPredictions\n} = __webpack_require__(/*! ../controllers/predictionController */ \"./controllers/predictionController.js\");\nconst requireAuth = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\nconst router = express.Router();\nrouter.use(requireAuth);\nrouter.get('/', getPredictions);\nmodule.exports = router;\n\n//# sourceURL=webpack://backend/./routes/predictions.js?");

/***/ }),

/***/ "./routes/prospectives.js":
/*!********************************!*\
  !*** ./routes/prospectives.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst {\n  createProspective,\n  getPropsectives,\n  submitProspective,\n  getPropsective,\n  deleteProspective,\n  getProspectiveQuestionsAndPredictions\n} = __webpack_require__(/*! ../controllers/prospectiveController */ \"./controllers/prospectiveController.js\");\nconst requireAuth = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\nconst router = express.Router();\nrouter.use(requireAuth);\nrouter.post('/', createProspective);\nrouter.get('/', getPropsectives);\nrouter.get('/:id', getPropsective);\nrouter.delete('/:id', deleteProspective);\nrouter.post('/:id/submit', submitProspective);\nrouter.get('/:id/questions-and-predictions', getProspectiveQuestionsAndPredictions);\nmodule.exports = router;\n\n//# sourceURL=webpack://backend/./routes/prospectives.js?");

/***/ }),

/***/ "./routes/questions.js":
/*!*****************************!*\
  !*** ./routes/questions.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst {\n  createQuestion,\n  getQuestions,\n  deleteQuestion,\n  updateQuestion\n} = __webpack_require__(/*! ../controllers/questionController */ \"./controllers/questionController.js\");\nconst requireAuth = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\nconst router = express.Router();\n\n// We want to protect all these routes\n// A user must be authenticated to request these routes\nrouter.use(requireAuth);\nrouter.post('/', createQuestion);\nrouter.get('/', getQuestions);\nrouter.delete('/:id', deleteQuestion);\nrouter.patch('/:id', updateQuestion);\nmodule.exports = router;\n\n//# sourceURL=webpack://backend/./routes/questions.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n// import 'dotenv/config'\n\nconst path = __webpack_require__(/*! path */ \"path\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst routes = __webpack_require__(/*! ./routes */ \"./routes.js\");\nconst questionRoutes = __webpack_require__(/*! ./routes/questions */ \"./routes/questions.js\");\nconst prospectiveRoutes = __webpack_require__(/*! ./routes/prospectives */ \"./routes/prospectives.js\");\nconst predictionRoutes = __webpack_require__(/*! ./routes/predictions */ \"./routes/predictions.js\");\nconst app = express();\nconst port = process.env.PORT || 8000;\napp.use(cors());\napp.use(express.json());\napp.use(express.static('static'));\n\n// routes\napp.use('/api/users', routes);\napp.use('/api/user', routes);\napp.use('/api/questions', questionRoutes);\napp.use('/api/prospectives', prospectiveRoutes);\napp.use('/api/predictions', predictionRoutes);\n\n// connect to the db\nconst url = process.env.MONGO_URL;\nmongoose.connect(url);\nconst connection = mongoose.connection;\nconnection.once('open', () => {\n  console.log('MongoDB database connection established successfully');\n});\napp.get('*', (req, res) => {\n  if (process.env.MODE === 'develop') return;\n  res.sendFile(path.join(__dirname, 'static/index.html'));\n});\napp.listen(port, () => {\n  console.log(`Server is running on port: ${port}`);\n});\n\n//# sourceURL=webpack://backend/./server.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("validator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;