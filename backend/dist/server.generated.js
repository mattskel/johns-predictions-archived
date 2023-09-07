/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/predictionController.js":
/*!*********************************************!*\
  !*** ./controllers/predictionController.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPredictions: () => (/* binding */ getPredictions)\n/* harmony export */ });\n/* harmony import */ var _models_predictionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/predictionModel */ \"./models/predictionModel.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const Prediction = require('../models/predictionModel');\n\nconst getPredictions = async (req, res) => {\n  const {\n    prospectiveId\n  } = req.query;\n  const {\n    _id: userId\n  } = req.user;\n  let query = {\n    userId\n  };\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const predictions = await _models_predictionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(predictions);\n};\n\n// module.exports = {\n//   getPredictions\n// }\n// export default { getPredictions }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(getPredictions, \"getPredictions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/predictionController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./controllers/predictionController.js?");

/***/ }),

/***/ "./controllers/prospectiveController.js":
/*!**********************************************!*\
  !*** ./controllers/prospectiveController.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProspective: () => (/* binding */ createProspective),\n/* harmony export */   deleteProspective: () => (/* binding */ deleteProspective),\n/* harmony export */   getPropsective: () => (/* binding */ getPropsective),\n/* harmony export */   getPropsectives: () => (/* binding */ getPropsectives),\n/* harmony export */   getProspectiveQuestionsAndPredictions: () => (/* binding */ getProspectiveQuestionsAndPredictions),\n/* harmony export */   submitProspective: () => (/* binding */ submitProspective)\n/* harmony export */ });\n/* harmony import */ var _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/prospectiveModel.js */ \"./models/prospectiveModel.js\");\n/* harmony import */ var _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/questionModel.js */ \"./models/questionModel.js\");\n/* harmony import */ var _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/predictionModel.js */ \"./models/predictionModel.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst Prospective = require('../models/prospectiveModel.js');\nconst Question = require('../models/questionModel.js');\nconst Prediction = require('../models/predictionModel');\nconst mongoose = require('mongoose');\n*/\n\n\n\n\nconst createProspective = async (req, res) => {\n  const {\n    title\n  } = req.body;\n  const emptyFields = [];\n  if (!title) {\n    emptyFields.push('title');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const prospective = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      title\n    });\n    res.status(200).json(prospective);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsectives = async (req, res) => {\n  let query = {};\n  const prospectives = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(prospectives);\n};\n\n// The submission from the prospective\nconst submitProspective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const submission = req.body;\n\n  // Validation\n  // Get the questions for this prospective\n  const emptyFields = [];\n  const questions = await _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    prospectiveId\n  }, {\n    _id: 1\n  });\n  questions.forEach(({\n    _id\n  }) => {\n    const questionId = _id.toString();\n    if (submission[questionId] === undefined) {\n      emptyFields.push(questionId);\n    }\n  });\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // Finally can insert the Answers\n  const insertArray = [];\n  const userId = req.user._id;\n  Object.keys(submission).map(questionId => {\n    const prediction = submission[questionId];\n    insertArray.push({\n      userId,\n      questionId,\n      prediction\n    });\n  });\n  try {\n    const predictions = await Promise.all(insertArray.map(insert => _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].replaceOne({\n      userId: insert.userId,\n      questionId: insert.questionId\n    }, {\n      ...insert\n    }, {\n      upsert: true\n    })));\n    res.status(200).json(predictions);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  if (!prospectiveId) {\n    return res.status(400).json({\n      error: 'prospectiveId is null or undefined.'\n    });\n  }\n  let query = {\n    _id: prospectiveId\n  };\n  const prospective = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne(query);\n  res.status(200).json(prospective);\n};\nconst deleteProspective = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_3___default().Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const prospective = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!prospective) {\n    return res.status(400).json({\n      error: 'Prospective not found'\n    });\n  }\n  res.status(200).json(prospective);\n};\nconst getProspectiveQuestionsAndPredictions = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const {\n    _id: userId\n  } = req.user;\n  const questions = await _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    prospectiveId\n  }, {\n    _id: 1,\n    prospectiveId: 1,\n    answer: 1,\n    text: 1\n  });\n  const questionIds = questions.map(({\n    _id\n  }) => _id);\n  const predictions = await _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n    userId,\n    questionId: {\n      $in: questionIds\n    }\n  }, {\n    _id: 1,\n    prediction: 1,\n    questionId: 1,\n    userId: 1\n  });\n  const questionsAndPredictions = questions.map(question => {\n    const {\n      answer,\n      _id: questionId,\n      text\n    } = question;\n    const {\n      prediction\n    } = predictions.find(({\n      questionId: predictionQuestionId\n    }) => predictionQuestionId.toString() === questionId.toString()) || {};\n    return {\n      answer,\n      questionId,\n      text,\n      prediction\n    };\n  });\n  res.status(200).json(questionsAndPredictions);\n};\n\n// module.exports = {\n//   createProspective,\n//   getPropsectives,\n//   submitProspective,\n//   getPropsective,\n//   deleteProspective,\n//   getProspectiveQuestionsAndPredictions,\n// }\n\n// export default {\n//   createProspective,\n//   getPropsectives,\n//   submitProspective,\n//   getPropsective,\n//   deleteProspective,\n//   getProspectiveQuestionsAndPredictions,\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createProspective, \"createProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(getPropsectives, \"getPropsectives\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(submitProspective, \"submitProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(getPropsective, \"getPropsective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(deleteProspective, \"deleteProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(getProspectiveQuestionsAndPredictions, \"getProspectiveQuestionsAndPredictions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./controllers/prospectiveController.js?");

/***/ }),

/***/ "./controllers/questionController.js":
/*!*******************************************!*\
  !*** ./controllers/questionController.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createQuestion: () => (/* binding */ createQuestion),\n/* harmony export */   deleteQuestion: () => (/* binding */ deleteQuestion),\n/* harmony export */   getQuestions: () => (/* binding */ getQuestions),\n/* harmony export */   updateQuestion: () => (/* binding */ updateQuestion)\n/* harmony export */ });\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/questionModel */ \"./models/questionModel.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst Question = require('../models/questionModel');\nconst mongoose = require('mongoose');\n*/\n\n\nconst createQuestion = async (req, res) => {\n  const {\n    text,\n    prospectiveId,\n    options\n  } = req.body;\n  const emptyFields = [];\n  if (!text) {\n    emptyFields.push('text');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      text,\n      prospectiveId,\n      options\n    });\n    res.status(200).json(question);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getQuestions = async (req, res) => {\n  const {\n    prospectiveId\n  } = req.query;\n  let query = {};\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const questions = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(questions);\n};\nconst deleteQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\nconst updateQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  const update = req.body || {};\n  const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    ...update\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\n\n// module.exports = {\n//   createQuestion,\n//   getQuestions,\n//   deleteQuestion,\n//   updateQuestion\n// }\n\n// export default {\n//   createQuestion,\n//   getQuestions,\n//   deleteQuestion,\n//   updateQuestion\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createQuestion, \"createQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n  reactHotLoader.register(getQuestions, \"getQuestions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n  reactHotLoader.register(deleteQuestion, \"deleteQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n  reactHotLoader.register(updateQuestion, \"updateQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./controllers/questionController.js?");

/***/ }),

/***/ "./controllers/user.controller.js":
/*!****************************************!*\
  !*** ./controllers/user.controller.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   deleteUser: () => (/* binding */ deleteUser),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   getUsers: () => (/* binding */ getUsers),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   signupUser: () => (/* binding */ signupUser),\n/* harmony export */   updateUser: () => (/* binding */ updateUser)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst User = require('../models/user.model');\nconst mongoose = require('mongoose');\nconst jwt = require('jsonwebtoken');\n*/\n\n\n\n\n// get a single user\nconst getUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n  if (!user) {\n    return res.status(404).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// create a new user\nconst createUser = async (req, res) => {\n  const {\n    username,\n    password,\n    email\n  } = req.body;\n  const emptyFields = [];\n  if (!username) {\n    emptyFields.push('username');\n  }\n  if (!password) {\n    emptyFields.push('password');\n  }\n  if (!email) {\n    emptyFields.push('email');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // add doc to db\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      username,\n      password,\n      email\n    });\n    res.status(200).json(user);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// delete a user\nconst deleteUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// update a user\nconst updateUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    ...req.body\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// get all the users\nconst getUsers = async (req, res) => {\n  const users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).sort({\n    createdAt: -1\n  });\n  res.status(200).json(users);\n};\nconst createToken = _id => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n    _id\n  }, process.env.SECRET, {\n    expiresIn: '3d'\n  });\n};\n\n// login user\nconst loginUser = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].login(email, password);\n    const {\n      isAdmin\n    } = user;\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({\n      email,\n      token,\n      isAdmin\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// signup user\nconst signupUser = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].signup(email, password);\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({\n      email,\n      token\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// module.exports = {\n//   getUser,\n//   createUser,\n//   deleteUser,\n//   updateUser,\n//   getUsers,\n//   loginUser,\n//   signupUser\n// }\n\n// export default {\n//   getUser,\n//   createUser,\n//   deleteUser,\n//   updateUser,\n//   getUsers,\n//   loginUser,\n//   signupUser\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(getUser, \"getUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(createUser, \"createUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(deleteUser, \"deleteUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(updateUser, \"updateUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(getUsers, \"getUsers\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(createToken, \"createToken\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(loginUser, \"loginUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(signupUser, \"signupUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./controllers/user.controller.js?");

/***/ }),

/***/ "./middleware/requireAuth.js":
/*!***********************************!*\
  !*** ./middleware/requireAuth.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst jwt = require('jsonwebtoken');\nconst User = require('../models/user.model')\n*/\n\n\nconst requireAuth = async (req, res, next) => {\n  //verify authentication\n  const {\n    authorization\n  } = req.headers;\n  if (!authorization) {\n    return res.status(401).json({\n      error: 'Authorization token required'\n    });\n  }\n  console.log(req.headers);\n  const [, token] = authorization.split(' ');\n  try {\n    const {\n      _id\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.SECRET);\n    req.user = await _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      _id\n    }).select('_id');\n    next();\n  } catch (error) {\n    console.log(error);\n    res.status(401).json({\n      error: 'Request is not authorized'\n    });\n  }\n};\n\n// module.exports = requireAuth\nconst _default = requireAuth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(requireAuth, \"requireAuth\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/middleware/requireAuth.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/middleware/requireAuth.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./middleware/requireAuth.js?");

/***/ }),

/***/ "./models/predictionModel.js":
/*!***********************************!*\
  !*** ./models/predictionModel.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst predictionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  userId: {\n    type: String,\n    required: true\n  },\n  questionId: {\n    type: String,\n    required: true\n  },\n  prediction: {\n    type: String\n  }\n}, {\n  timestamps: true\n});\nconst Prediction = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Prediction', predictionSchema);\nconst _default = Prediction;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(predictionSchema, \"predictionSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/predictionModel.js\");\n  reactHotLoader.register(Prediction, \"Prediction\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/predictionModel.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/predictionModel.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./models/predictionModel.js?");

/***/ }),

/***/ "./models/prospectiveModel.js":
/*!************************************!*\
  !*** ./models/prospectiveModel.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst prospectiveSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Prospective = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model)('Prospective', prospectiveSchema);\n// module.exports = Prospective;\nconst _default = Prospective;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(prospectiveSchema, \"prospectiveSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospectiveModel.js\");\n  reactHotLoader.register(Prospective, \"Prospective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospectiveModel.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospectiveModel.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./models/prospectiveModel.js?");

/***/ }),

/***/ "./models/questionModel.js":
/*!*********************************!*\
  !*** ./models/questionModel.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst questionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  text: {\n    type: String,\n    required: true\n  },\n  prospectiveId: {\n    type: String\n  },\n  answer: {\n    type: String\n  },\n  options: {\n    type: [String]\n  }\n}, {\n  timestamps: true\n});\nconst Question = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Question', questionSchema);\n// module.exports = Question;\nconst _default = Question;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(questionSchema, \"questionSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/questionModel.js\");\n  reactHotLoader.register(Question, \"Question\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/questionModel.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/questionModel.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./models/questionModel.js?");

/***/ }),

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n// const bcrypt = require('bcrypt');\n// const validator = require('validator');\n\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String\n    // required: true\n  },\n\n  isAdmin: {\n    type: Boolean\n  }\n}, {\n  timestamps: true\n});\n\n// static signup method\nuserSchema.statics.signup = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  if (!validator__WEBPACK_IMPORTED_MODULE_2___default().isEmail(email)) {\n    throw Error('Email is not valid');\n  }\n  // if (!validator.isStrongPassword) {\n  //   throw Error('Password is not string enough')\n  // }\n\n  const exists = await this.findOne({\n    email\n  });\n  if (exists) {\n    throw Error('Email already exists');\n  }\n  const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);\n  const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, salt);\n  const user = await this.create({\n    email,\n    password: hash\n  });\n  return user;\n};\n\n// static login method\nuserSchema.statics.login = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  const user = await this.findOne({\n    email\n  });\n  if (!user) {\n    throw Error('Incorrect email');\n  }\n  const match = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n  if (!match) {\n    throw Error('Incorrect password');\n  }\n  return user;\n};\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n// module.exports = User;\nconst _default = User;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(userSchema, \"userSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n  reactHotLoader.register(User, \"User\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./models/user.model.js?");

/***/ }),

/***/ "./routes/predictions.js":
/*!*******************************!*\
  !*** ./routes/predictions.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_predictionController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/predictionController.js */ \"./controllers/predictionController.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  getPredictions\n} = require('../controllers/predictionController');\nconst requireAuth = require('../middleware/requireAuth');\n */\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.get('/', _controllers_predictionController_js__WEBPACK_IMPORTED_MODULE_1__.getPredictions);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/predictions.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/predictions.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./routes/predictions.js?");

/***/ }),

/***/ "./routes/prospectives.js":
/*!********************************!*\
  !*** ./routes/prospectives.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/prospectiveController */ \"./controllers/prospectiveController.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  createProspective,\n  getPropsectives,\n  submitProspective,\n  getPropsective,\n  deleteProspective,\n  getProspectiveQuestionsAndPredictions\n} = require('../controllers/prospectiveController')\nconst requireAuth = require('../middleware/requireAuth');\n*/\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.post('/', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__.createProspective);\nrouter.get('/', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__.getPropsectives);\nrouter.get('/:id', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__.getPropsective);\nrouter.delete('/:id', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__.deleteProspective);\nrouter.post('/:id/submit', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__.submitProspective);\nrouter.get('/:id/questions-and-predictions', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__.getProspectiveQuestionsAndPredictions);\n\n// module.exports = router;\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/prospectives.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/prospectives.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./routes/prospectives.js?");

/***/ }),

/***/ "./routes/questions.js":
/*!*****************************!*\
  !*** ./routes/questions.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/questionController */ \"./controllers/questionController.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n *\nconst express = require('express');\n\nconst {\n  createQuestion,\n  getQuestions,\n  deleteQuestion,\n  updateQuestion\n} = require('../controllers/questionController');\nconst requireAuth = require('../middleware/requireAuth');\n */\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n// We want to protect all these routes\n// A user must be authenticated to request these routes\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.post('/', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__.createQuestion);\nrouter.get('/', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__.getQuestions);\nrouter.delete('/:id', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__.deleteQuestion);\nrouter.patch('/:id', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__.updateQuestion);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/questions.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/questions.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./routes/questions.js?");

/***/ }),

/***/ "./routes/user.routes.js":
/*!*******************************!*\
  !*** ./routes/user.routes.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./controllers/user.controller.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./middleware/requireAuth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  createUser,\n  getUser,\n  deleteUser,\n  updateUser,\n  getUsers,\n  loginUser,\n  signupUser\n} = require('../controllers/user.controller');\nconst requireAuth = require('../middleware/requireAuth');\n*/\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n// login route\nrouter.post('/login', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.loginUser);\n\n// signup router\nrouter.post('/signup', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.signupUser);\n\n/**\n * Don't need auth for login and signup\n * Normally login and signup would be in a different route file\n * Because they are in the same file need to put them before the auth\n */\n\n// require auth for all routes\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n// POST a new user\nrouter.post('/', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.createUser);\n\n// GET an existing user\nrouter.get('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.getUser);\n\n// GET all users\nrouter.get('/', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.getUsers);\n\n// DELETE a user\nrouter.delete('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.deleteUser);\n\n// PATCH a user\nrouter.patch('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.updateUser);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/user.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./routes/user.routes.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/user.routes */ \"./routes/user.routes.js\");\n/* harmony import */ var _routes_questions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/questions */ \"./routes/questions.js\");\n/* harmony import */ var _routes_prospectives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/prospectives */ \"./routes/prospectives.js\");\n/* harmony import */ var _routes_predictions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/predictions */ \"./routes/predictions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// require('dotenv').config();\n\n\n/**\n * Try using import instead\nconst path = require('path');\nconst express = require('express');\nconst cors = require('cors');\nconst mongoose = require('mongoose');\nconst userRoutes = require('./routes/user.routes');\nconst questionRoutes = require('./routes/questions');\nconst prospectiveRoutes = require('./routes/prospectives');\nconst predictionRoutes = require('./routes/predictions')\n */\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nconst port = process.env.PORT || 8000;\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"]('static'));\n\n// routes\napp.use('/api/users', _routes_user_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.use('/api/user', _routes_user_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\napp.use('/api/questions', _routes_questions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use('/api/prospectives', _routes_prospectives__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/api/predictions', _routes_predictions__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\n// connect to the db\nconst url = process.env.MONGO_URL;\nmongoose__WEBPACK_IMPORTED_MODULE_4___default().connect(url);\nconst connection = (mongoose__WEBPACK_IMPORTED_MODULE_4___default().connection);\nconnection.once('open', () => {\n  console.log('MongoDB database connection established successfully');\n});\napp.get('*', (req, res) => {\n  if (process.env.MODE === 'develop') return;\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'static/index.html'));\n});\napp.listen(port, () => {\n  console.log(`Server is running on port: ${port}`);\n});\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(app, \"app\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/server.js\");\n  reactHotLoader.register(port, \"port\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/server.js\");\n  reactHotLoader.register(url, \"url\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/server.js\");\n  reactHotLoader.register(connection, \"connection\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/server.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://backend/./server.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;