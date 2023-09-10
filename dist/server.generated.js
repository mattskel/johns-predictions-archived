module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backend/controllers/auth.controller.js":
/*!************************************************!*\
  !*** ./backend/controllers/auth.controller.js ***!
  \************************************************/
/*! exports provided: signin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./backend/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst createToken = _id => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n    _id\n  }, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].jwtSecret);\n};\nconst signin = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      \"email\": req.body.email\n    });\n    // const {isAdmin} = user\n\n    if (!user) {\n      return res.status('401').json({\n        error: \"User not found\"\n      });\n    }\n    if (!user.authenticate(password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    // create a token\n    const token = createToken(user._id);\n    // res.status(200).json({email, token});\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.username,\n        email: user.email,\n        isAdmin: user.isAdmin\n      }\n    });\n  } catch (error) {\n    res.status(401).json({\n      error: 'Could not sign in'\n    });\n  }\n};\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\nconst hasAuthorization = (req, res, next) => {\n  next();\n};\nconst _default = {\n  signin,\n  signout,\n  hasAuthorization\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createToken, \"createToken\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/auth.controller.js\");\n  reactHotLoader.register(signin, \"signin\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/auth.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/auth.controller.js?");

/***/ }),

/***/ "./backend/controllers/prospective.controller.js":
/*!*******************************************************!*\
  !*** ./backend/controllers/prospective.controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_prospective_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/prospective.model.js */ \"./backend/models/prospective.model.js\");\n/* harmony import */ var _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/questionModel.js */ \"./backend/models/questionModel.js\");\n/* harmony import */ var _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/predictionModel.js */ \"./backend/models/predictionModel.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst Prospective = require('../models/prospectiveModel.js');\nconst Question = require('../models/questionModel.js');\nconst Prediction = require('../models/predictionModel');\nconst mongoose = require('mongoose');\n*/\n\n\n\n\nconst createProspective = async (req, res) => {\n  const {\n    title\n  } = req.body;\n  const emptyFields = [];\n  if (!title) {\n    emptyFields.push('title');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const prospective = await _models_prospective_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      title\n    });\n    res.status(200).json(prospective);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsectives = async (req, res) => {\n  let query = {};\n  const prospectives = await _models_prospective_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(prospectives);\n};\n\n// The submission from the prospective\nconst submitProspective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const submission = req.body;\n\n  // Validation\n  // Get the questions for this prospective\n  const emptyFields = [];\n  const questions = await _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    prospectiveId\n  }, {\n    _id: 1\n  });\n  questions.forEach(({\n    _id\n  }) => {\n    const questionId = _id.toString();\n    if (submission[questionId] === undefined) {\n      emptyFields.push(questionId);\n    }\n  });\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // Finally can insert the Answers\n  const insertArray = [];\n  const userId = req.user._id;\n  Object.keys(submission).map(questionId => {\n    const prediction = submission[questionId];\n    insertArray.push({\n      userId,\n      questionId,\n      prediction\n    });\n  });\n  try {\n    const predictions = await Promise.all(insertArray.map(insert => _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].replaceOne({\n      userId: insert.userId,\n      questionId: insert.questionId\n    }, {\n      ...insert\n    }, {\n      upsert: true\n    })));\n    res.status(200).json(predictions);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsective = async (req, res, next, id) => {\n  // const {id} = req.params;\n  // if (!id) {\n  //   return res.status(400).json({error: 'prospectiveId is null or undefined.'});\n  // }\n\n  console.log('prospectiveId', id);\n\n  // // let query = {_id: prospectiveId}\n  // const prospective = await Prospective.findById(id);\n\n  // res.status(200).json(prospective);\n  try {\n    let prospective = await _models_prospective_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!prospective) return res.status('400').json({\n      error: \"Prospective not found\"\n    });\n    req.prospective = prospective;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve prospective\"\n    });\n  }\n};\nconst read = (req, res) => {\n  return res.json(req.prospective);\n};\nconst deleteProspective = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const prospective = await _models_prospective_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!prospective) {\n    return res.status(400).json({\n      error: 'Prospective not found'\n    });\n  }\n  res.status(200).json(prospective);\n};\nconst getProspectiveQuestionsAndPredictions = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const {\n    _id: userId\n  } = req.user;\n  const questions = await _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    prospectiveId\n  }, {\n    _id: 1,\n    prospectiveId: 1,\n    answer: 1,\n    text: 1\n  });\n  const questionIds = questions.map(({\n    _id\n  }) => _id);\n  const predictions = await _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n    userId,\n    questionId: {\n      $in: questionIds\n    }\n  }, {\n    _id: 1,\n    prediction: 1,\n    questionId: 1,\n    userId: 1\n  });\n  const questionsAndPredictions = questions.map(question => {\n    const {\n      answer,\n      _id: questionId,\n      text\n    } = question;\n    const {\n      prediction\n    } = predictions.find(({\n      questionId: predictionQuestionId\n    }) => predictionQuestionId.toString() === questionId.toString()) || {};\n    return {\n      answer,\n      questionId,\n      text,\n      prediction\n    };\n  });\n  res.status(200).json(questionsAndPredictions);\n};\n\n// module.exports = {\n//   createProspective,\n//   getPropsectives,\n//   submitProspective,\n//   getPropsective,\n//   deleteProspective,\n//   getProspectiveQuestionsAndPredictions,\n// }\nconst _default = {\n  createProspective,\n  getPropsectives,\n  submitProspective,\n  getPropsective,\n  deleteProspective,\n  getProspectiveQuestionsAndPredictions,\n  read\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createProspective, \"createProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(getPropsectives, \"getPropsectives\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(submitProspective, \"submitProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(getPropsective, \"getPropsective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(deleteProspective, \"deleteProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(getProspectiveQuestionsAndPredictions, \"getProspectiveQuestionsAndPredictions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospective.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/prospective.controller.js?");

/***/ }),

/***/ "./backend/controllers/question.controller.js":
/*!****************************************************!*\
  !*** ./backend/controllers/question.controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/questionModel */ \"./backend/models/questionModel.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst Question = require('../models/questionModel');\nconst mongoose = require('mongoose');\n*/\n\n\nconst createQuestion = async (req, res) => {\n  const {\n    text,\n    prospectiveId,\n    options\n  } = req.body;\n  const emptyFields = [];\n  if (!text) {\n    emptyFields.push('text');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      text,\n      prospectiveId,\n      options\n    });\n    res.status(200).json(question);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getQuestions = async (req, res) => {\n  // const {prospectiveId} = req.query;\n  const {\n    _id: prospectiveId\n  } = req.prospective;\n  let query = {};\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const questions = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n\n  // const questions = [];\n  res.status(200).json(questions);\n};\nconst deleteQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\nconst updateQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  const update = req.body || {};\n  const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    ...update\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\n\n// module.exports = {\n//   createQuestion,\n//   getQuestions,\n//   deleteQuestion,\n//   updateQuestion\n// }\nconst _default = {\n  createQuestion,\n  getQuestions,\n  deleteQuestion,\n  updateQuestion\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createQuestion, \"createQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/question.controller.js\");\n  reactHotLoader.register(getQuestions, \"getQuestions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/question.controller.js\");\n  reactHotLoader.register(deleteQuestion, \"deleteQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/question.controller.js\");\n  reactHotLoader.register(updateQuestion, \"updateQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/question.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/question.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/question.controller.js?");

/***/ }),

/***/ "./backend/controllers/user.controller.js":
/*!************************************************!*\
  !*** ./backend/controllers/user.controller.js ***!
  \************************************************/
/*! exports provided: getUser, createUser, deleteUser, updateUser, getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUser\", function() { return deleteUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUser\", function() { return updateUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./backend/models/user.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst User = require('../models/user.model');\nconst mongoose = require('mongoose');\nconst jwt = require('jsonwebtoken');\n*/\n\n\n\n\n// get a single user\nconst getUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n  if (!user) {\n    return res.status(404).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// create a new user\nconst createUser = async (req, res) => {\n  const {\n    username,\n    password,\n    email\n  } = req.body;\n  const emptyFields = [];\n  if (!username) {\n    emptyFields.push('username');\n  }\n  if (!password) {\n    emptyFields.push('password');\n  }\n  if (!email) {\n    emptyFields.push('email');\n  }\n  if (emptyFields.length > 0) {\n    console.log('emptyFields', emptyFields);\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // add doc to db\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      username,\n      password,\n      email\n    });\n    res.status(200).json(user);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// delete a user\nconst deleteUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// update a user\nconst updateUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    ...req.body\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// get all the users\nconst getUsers = async (req, res) => {\n  const users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).sort({\n    createdAt: -1\n  });\n  res.status(200).json(users);\n};\n\n// const createToken = (_id) => {\n//   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});\n// }\n\n/*\n * Moved to backend/controllers/auth.controller.js\n * And renamed signin\n// login user\nexport const loginUser = async (req, res) => {\n  const {email, password} = req.body;\n  try {\n    const user = await User.login(email, password);\n    const {isAdmin} = user\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({email, token, isAdmin});\n  } catch(error) {\n    res.status(400).json({error: error.message})\n  }\n}\n*/\n\n/*\n * Refactored as create\n// signup user\nexport const signupUser = async (req, res) => {\n  const {email, password} = req.body;\n  try {\n    const user = await User.signup(email, password);\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({email, token});\n  } catch(error) {\n    res.status(400).json({error: error.message})\n  }\n}\n*/\n\n// module.exports = {\n//   getUser,\n//   createUser,\n//   deleteUser,\n//   updateUser,\n//   getUsers,\n//   loginUser,\n//   signupUser\n// }\n\n// export default {\n//   getUser,\n//   createUser,\n//   deleteUser,\n//   updateUser,\n//   getUsers,\n//   loginUser,\n//   signupUser\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(getUser, \"getUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(createUser, \"createUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(deleteUser, \"deleteUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(updateUser, \"updateUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(getUsers, \"getUsers\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/user.controller.js?");

/***/ }),

/***/ "./backend/devBundle.js":
/*!******************************!*\
  !*** ./backend/devBundle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config.js */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// import config from './../webpack.config.client.js'\n\n\n\n\n\nconst compile = app => {\n  if (_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env == \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(compile, \"compile\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/devBundle.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/devBundle.js?");

/***/ }),

/***/ "./backend/express.js":
/*!****************************!*\
  !*** ./backend/express.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n/* harmony import */ var react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _frontend_MainRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../frontend/MainRouter */ \"./frontend/MainRouter.js\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _frontend_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../frontend/theme */ \"./frontend/theme.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/user.routes */ \"./backend/routes/user.routes.js\");\n/* harmony import */ var _routes_question_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/question.routes */ \"./backend/routes/question.routes.js\");\n/* harmony import */ var _routes_prospective_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/prospective.routes */ \"./backend/routes/prospective.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/auth.routes */ \"./backend/routes/auth.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./devBundle */ \"./backend/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n// Modules for server-side rendering\n\n\n\n\n\n\n\n\n\n\n// import predictionRoutes from './routes/predictions'\n\n\n// import userRoutes from './routes/user.routes'\n// import authRoutes from './routes/auth.routes'\n\n// comment out before building for production\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// comment out before building for production\n_devBundle__WEBPACK_IMPORTED_MODULE_18__[\"default\"].compile(app);\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\n// app.use(cors())\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\n// app.use(express.json());\n// app.use(express.static('static'));\n\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\n\n// routes\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\napp.use('/api/users', _routes_user_routes__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\napp.use('/api/user', _routes_user_routes__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\napp.use('/', _routes_question_routes__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\napp.use('/', _routes_prospective_routes__WEBPACK_IMPORTED_MODULE_16__[\"default\"]);\n// app.use('/api/predictions', predictionRoutes);\n\napp.get('*', (req, res) => {\n  // 1. Generate CSS styles using Material-UI's ServerStyleSheets\n  // 2. Use renderToString to generate markup which renders components specific to the route requested\n  // 3. Return template with markup and CSS styles in the response\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__[\"ServerStyleSheets\"]();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_8___default.a.renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom_StaticRouter__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__[\"ThemeProvider\"], {\n    theme: _frontend_theme__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_frontend_MainRouter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)))));\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  const css = sheets.toString();\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_13__[\"default\"])({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/express.js\");\n  reactHotLoader.register(app, \"app\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/express.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/express.js?");

/***/ }),

/***/ "./backend/middleware/requireAuth.js":
/*!*******************************************!*\
  !*** ./backend/middleware/requireAuth.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./backend/models/user.model.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst jwt = require('jsonwebtoken');\nconst User = require('../models/user.model')\n*/\n\n\nconst requireAuth = async (req, res, next) => {\n  //verify authentication\n  const {\n    authorization\n  } = req.headers;\n  if (!authorization) {\n    return res.status(401).json({\n      error: 'Authorization token required'\n    });\n  }\n  console.log(req.headers);\n  const [, token] = authorization.split(' ');\n  try {\n    const {\n      _id\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, process.env.SECRET);\n    req.user = await _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      _id\n    }).select('_id');\n    next();\n  } catch (error) {\n    console.log(error);\n    res.status(401).json({\n      error: 'Request is not authorized'\n    });\n  }\n};\n\n// module.exports = requireAuth\nconst _default = requireAuth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(requireAuth, \"requireAuth\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/middleware/requireAuth.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/middleware/requireAuth.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/middleware/requireAuth.js?");

/***/ }),

/***/ "./backend/models/predictionModel.js":
/*!*******************************************!*\
  !*** ./backend/models/predictionModel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst predictionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  userId: {\n    type: String,\n    required: true\n  },\n  questionId: {\n    type: String,\n    required: true\n  },\n  prediction: {\n    type: String\n  }\n}, {\n  timestamps: true\n});\nconst Prediction = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Prediction', predictionSchema);\nconst _default = Prediction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(predictionSchema, \"predictionSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/predictionModel.js\");\n  reactHotLoader.register(Prediction, \"Prediction\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/predictionModel.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/predictionModel.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/models/predictionModel.js?");

/***/ }),

/***/ "./backend/models/prospective.model.js":
/*!*********************************************!*\
  !*** ./backend/models/prospective.model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst prospectiveSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Prospective = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Prospective', prospectiveSchema);\n// module.exports = Prospective;\nconst _default = Prospective;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(prospectiveSchema, \"prospectiveSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospective.model.js\");\n  reactHotLoader.register(Prospective, \"Prospective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospective.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospective.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/models/prospective.model.js?");

/***/ }),

/***/ "./backend/models/questionModel.js":
/*!*****************************************!*\
  !*** ./backend/models/questionModel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst questionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  text: {\n    type: String,\n    required: true\n  },\n  prospectiveId: {\n    type: String\n  },\n  answer: {\n    type: String\n  },\n  options: {\n    type: [String]\n  }\n}, {\n  timestamps: true\n});\nconst Question = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Question', questionSchema);\n// module.exports = Question;\nconst _default = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(questionSchema, \"questionSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/questionModel.js\");\n  reactHotLoader.register(Question, \"Question\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/questionModel.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/questionModel.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/models/questionModel.js?");

/***/ }),

/***/ "./backend/models/user.model.js":
/*!**************************************!*\
  !*** ./backend/models/user.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n// const bcrypt = require('bcrypt');\n// const validator = require('validator');\n\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String\n    // required: true\n  },\n\n  isAdmin: {\n    type: Boolean\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  }\n}, {\n  timestamps: true\n});\n\n// static signup method\nuserSchema.statics.signup = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  if (!validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmail(email)) {\n    throw Error('Email is not valid');\n  }\n  // if (!validator.isStrongPassword) {\n  //   throw Error('Password is not string enough')\n  // }\n\n  const exists = await this.findOne({\n    email\n  });\n  if (exists) {\n    throw Error('Email already exists');\n  }\n  const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10);\n  const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, salt);\n  const user = await this.create({\n    email,\n    password: hash\n  });\n  return user;\n};\n\n// static login method\nuserSchema.statics.login = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  const user = await this.findOne({\n    email\n  });\n  if (!user) {\n    throw Error('Incorrect email');\n  }\n  const match = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password);\n  if (!match) {\n    throw Error('Incorrect password');\n  }\n  return user;\n};\nuserSchema.methods = {\n  authenticate: function (plainText) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(plainText, this.password);\n  }\n};\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);\n// module.exports = User;\nconst _default = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(userSchema, \"userSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n  reactHotLoader.register(User, \"User\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/models/user.model.js?");

/***/ }),

/***/ "./backend/routes/auth.routes.js":
/*!***************************************!*\
  !*** ./backend/routes/auth.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./backend/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/auth.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/auth.routes.js?");

/***/ }),

/***/ "./backend/routes/prospective.routes.js":
/*!**********************************************!*\
  !*** ./backend/routes/prospective.routes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/prospective.controller */ \"./backend/controllers/prospective.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./backend/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  createProspective,\n  getPropsectives,\n  submitProspective,\n  getPropsective,\n  deleteProspective,\n  getProspectiveQuestionsAndPredictions\n} = require('../controllers/prospectiveController')\nconst requireAuth = require('../middleware/requireAuth');\n*/\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// router.use(requireAuth);\nrouter.route('/api/prospectives').get(_controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPropsectives).post(_controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProspective);\nrouter.route('/api/prospectives/:id').get(_controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read);\n// .delete(prospectiveCtrl.deleteProspective);\n\n// router.post('/api/prospectives/:id/submit', submitProspective);\n// router.get('/api/prospectives/:id/questions-and-predictions', getProspectiveQuestionsAndPredictions);\n\n// module.exports = router;\nrouter.param('id', _controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPropsective);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/prospective.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/prospective.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/prospective.routes.js?");

/***/ }),

/***/ "./backend/routes/question.routes.js":
/*!*******************************************!*\
  !*** ./backend/routes/question.routes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_question_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/question.controller */ \"./backend/controllers/question.controller.js\");\n/* harmony import */ var _controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/prospective.controller */ \"./backend/controllers/prospective.controller.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./backend/middleware/requireAuth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n *\nconst express = require('express');\n\nconst {\n  createQuestion,\n  getQuestions,\n  deleteQuestion,\n  updateQuestion\n} = require('../controllers/questionController');\nconst requireAuth = require('../middleware/requireAuth');\n */\n\n// import {createQuestion, getQuestions, deleteQuestion, updateQuestion} from '../controllers/questionController';\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// We want to protect all these routes\n// A user must be authenticated to request these routes\n// router.use(requireAuth);\n\n// router.post('/', createQuestion);\n\n// router.get('/', getQuestions);\n\n// router.delete('/:id', deleteQuestion);\n\n// router.patch('/:id', updateQuestion)\nrouter.route('/api/questions/for/:prospectiveId').get(_controllers_question_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getQuestions);\n// .post(questionCtrl.createQuestion);\n\n// module.exports = router\nrouter.param('prospectiveId', _controllers_prospective_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPropsective);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/question.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/question.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/question.routes.js?");

/***/ }),

/***/ "./backend/routes/user.routes.js":
/*!***************************************!*\
  !*** ./backend/routes/user.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./backend/controllers/user.controller.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./backend/middleware/requireAuth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  createUser,\n  getUser,\n  deleteUser,\n  updateUser,\n  getUsers,\n  loginUser,\n  signupUser\n} = require('../controllers/user.controller');\nconst requireAuth = require('../middleware/requireAuth');\n*/\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// login route\n// router.post('/login', loginUser);\n\n// signup router\n// router.post('/signup', signupUser);\n\n/**\n * Don't need auth for login and signup\n * Normally login and signup would be in a different route file\n * Because they are in the same file need to put them before the auth\n */\n\n// require auth for all routes\n// router.use(requireAuth);\n\nrouter.route('/').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"getUsers\"]).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"]);\n\n// router.post('/', createUser);\n\n// GET an existing user\nrouter.get('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"getUser\"]);\n\n// GET all users\n// router.get('/', getUsers);\n\n// DELETE a user\nrouter.delete('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"deleteUser\"]);\n\n// PATCH a user\nrouter.patch('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"updateUser\"]);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/user.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/user.routes.js?");

/***/ }),

/***/ "./backend/server.js":
/*!***************************!*\
  !*** ./backend/server.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./backend/express.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// require('dotenv').config();\n// import 'dotenv/config'\n\n/**\n * Try using import instead\nconst path = require('path');\nconst express = require('express');\nconst cors = require('cors');\nconst mongoose = require('mongoose');\nconst userRoutes = require('./routes/user.routes');\nconst questionRoutes = require('./routes/questions');\nconst prospectiveRoutes = require('./routes/prospectives');\nconst predictionRoutes = require('./routes/predictions')\n */\n\n// import path from 'path';\n// import express from 'express';\n// import cors from 'cors';\n\n// import userRoutes from './routes/user.routes';\n// import questionRoutes from './routes/questions';\n// import prospectiveRoutes from './routes/prospectives';\n// import predictionRoutes from './routes/predictions'\n\n\n// const app = express();\nconst port = _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port || 3000;\n\n// app.use(cors());\n// app.use(express.json());\n// app.use(express.static('static'));\n\n// routes\n// app.use('/api/users', userRoutes);\n// app.use('/api/user', userRoutes)\n// app.use('/api/questions', questionRoutes);\n// app.use('/api/prospectives', prospectiveRoutes);\n// app.use('/api/predictions', predictionRoutes);\n\n// connect to the db\n// const url = process.env.MONGO_URL;\n// mongoose.connect(url);\n// const connection = mongoose.connection;\n// connection.once('open', () => {\n// \tconsole.log('MongoDB database connection established successfully');\n// });\n\n// Connection URL\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise;\n// mongoose.connect(config.mongoUri)\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', err => {\n  console.error('MongoDB connection error:', err);\n});\n\n// app.get('*', (req, res) => {\n// \tif (process.env.MODE === 'develop') return;\n\n// \tres.sendFile(path.join(__dirname, 'static/index.html'));\n// })\n\n_express__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(port, () => {\n  console.log(`Server is running on port: ${port}`);\n});\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(port, \"port\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/server.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/server.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || '127.0.0.1') + ':' + (process.env.MONGO_PORT || '27017') + '/johns-predictions-develop'\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(config, \"config\", \"/Users/matthewskelley/my-projects/wine-one-project/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/config/config.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./frontend/MainRouter.js":
/*!********************************!*\
  !*** ./frontend/MainRouter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./frontend/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./frontend/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./frontend/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./frontend/auth/Signin.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Menu */ \"./frontend/core/Menu.js\");\n/* harmony import */ var _prospective_Prospectives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prospective/Prospectives */ \"./frontend/prospective/Prospectives.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/users\",\n    component: _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signup\",\n    component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signin\",\n    component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/admin/prospectives\",\n    component: _prospective_Prospectives__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  })));\n};\nconst _default = MainRouter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/MainRouter.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/MainRouter.js?");

/***/ }),

/***/ "./frontend/auth/Signin.js":
/*!*********************************!*\
  !*** ./frontend/auth/Signin.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-auth.js */ \"./frontend/auth/api-auth.js\");\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-helper */ \"./frontend/auth/auth-helper.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/* eslint-disable jsx-a11y/label-has-associated-control */\n\n\n// import useLogin from '../hooks/useLogin';\n// import useAuthContext from '../hooks/useAuthContext';\n\n\nfunction Signin(props) {\n  // const [email, setEmail] = useState('');\n  // const [password, setPassword] = useState('');\n  // const { login, error, isLoading } = useLogin();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    password: '',\n    email: '',\n    error: '',\n    redirectToReferrer: false\n  });\n\n  // const navigate = useNavigate();\n  // const location = useLocation();\n  // const { state } = location || {};\n  // const { from = '/home' } = state || {};\n\n  // const { user } = useAuthContext();\n\n  // useEffect(() => {\n  //   if (user) {\n  //     navigate(from, { replace: true });\n  //   }\n  // });\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n\n    // await login(email, password);\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_2__[\"signin\"])(user).then(data => {\n      if (data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        _auth_helper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].authenticate(data, () => {\n          setValues({\n            ...values,\n            error: '',\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  };\n  const handleChange = name => event => {\n    setValues({\n      ...values,\n      [name]: event.target.value\n    });\n  };\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: '/'\n    }\n  };\n  const {\n    redirectToReferrer\n  } = values;\n  if (redirectToReferrer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n      to: from\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"login\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Log in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    onChange: handleChange('email'),\n    value: values.email\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Pasword:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"password\",\n    onChange: handleChange('password'),\n    value: values.password\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \"Log in\"), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error\"\n  }, values.error));\n}\n__signature__(Signin, \"useState{[values, setValues]({\\n    password: '',\\n    email: '',\\n    error: '',\\n    redirectToReferrer: false,\\n  })}\");\nconst _default = Signin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Signin, \"Signin\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/auth/Signin.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/auth/Signin.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/auth/Signin.js?");

/***/ }),

/***/ "./frontend/auth/api-auth.js":
/*!***********************************!*\
  !*** ./frontend/auth/api-auth.js ***!
  \***********************************/
/*! exports provided: signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst signin = async user => {\n  try {\n    const response = await fetch('/auth/signin', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\nconst signout = async () => {\n  try {\n    let response = await fetch('/auth/signout/', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(signin, \"signin\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/auth/api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/auth/api-auth.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/auth/api-auth.js?");

/***/ }),

/***/ "./frontend/auth/auth-helper.js":
/*!**************************************!*\
  !*** ./frontend/auth/auth-helper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth */ \"./frontend/auth/api-auth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst auth = {\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") {\n      sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    }\n    cb();\n  },\n  isAuthenticated() {\n    if (typeof window == \"undefined\") {\n      return false;\n    }\n    if (sessionStorage.getItem('jwt')) {\n      return JSON.parse(sessionStorage.getItem('jwt'));\n    } else {\n      return false;\n    }\n  },\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") {\n      sessionStorage.removeItem('jwt');\n    }\n    cb();\n    //optional\n    Object(_api_auth__WEBPACK_IMPORTED_MODULE_0__[\"signout\"])().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\nconst _default = auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(auth, \"auth\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/auth/auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/auth/auth-helper.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/auth/auth-helper.js?");

/***/ }),

/***/ "./frontend/core/Home.js":
/*!*******************************!*\
  !*** ./frontend/core/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n// import unicornbikeImg from '../../assets/images/unicornbike.jpg'\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    marginTop: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 400\n  }\n}));\nfunction Home() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body2\",\n    component: \"p\"\n  }, \"Welcome to the MERN Skeleton home page.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n    to: \"/users\"\n  }, \"Users\"));\n}\n__signature__(Home, \"useStyles{classes}\", () => [useStyles]);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(useStyles, \"useStyles\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/core/Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/core/Home.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/core/Home.js?");

/***/ }),

/***/ "./frontend/core/Menu.js":
/*!*******************************!*\
  !*** ./frontend/core/Menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-helper */ \"./frontend/auth/auth-helper.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n// import useLogout from '../hooks/useLogout';\n// import useAuthContext from '../hooks/useAuthContext';\n// import Button from './button';\n\nconst Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(({\n  history\n}) => {\n  // const { logout } = useLogout();\n  // const { user } = useAuthContext();\n\n  const handleClick = () => {\n    // logout();\n    console.log('logout');\n    _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearJWT(() => history.push('/'));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Johns predictions\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated().user.email), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated().user.isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/admin/prospectives\"\n  }, \"Prospectives\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: handleClick\n  }, \"Log out\")), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/signin\"\n  }, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/signup\"\n  }, \"Signup\")))));\n});\nconst _default = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Menu, \"Menu\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/core/Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/core/Menu.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/core/Menu.js?");

/***/ }),

/***/ "./frontend/prospective/Prospectives.js":
/*!**********************************************!*\
  !*** ./frontend/prospective/Prospectives.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProspectivesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProspectivesList */ \"./frontend/prospective/ProspectivesList.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// import { Outlet } from 'react-router-dom';\n// import Breadcrumbs from '../components/Breadcrumbs';\n\nfunction Prospectives() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"prospectives\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProspectivesList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\nconst _default = Prospectives;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Prospectives, \"Prospectives\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/prospective/Prospectives.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/prospective/Prospectives.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/prospective/Prospectives.js?");

/***/ }),

/***/ "./frontend/prospective/ProspectivesList.js":
/*!**************************************************!*\
  !*** ./frontend/prospective/ProspectivesList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_prospective_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-prospective.js */ \"./frontend/prospective/api-prospective.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst ProspectivesList = () => {\n  const [prospectives, setProspectives] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_prospective_js__WEBPACK_IMPORTED_MODULE_2__[\"list\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setProspectives(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, prospectives.map(prospective => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: prospective._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `${prospective._id}/`,\n    relative: \"path\"\n  }, prospective.title))));\n};\n__signature__(ProspectivesList, \"useState{[prospectives, setProspectives]([])}\\nuseEffect{}\");\nconst _default = ProspectivesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(ProspectivesList, \"ProspectivesList\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/prospective/ProspectivesList.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/prospective/ProspectivesList.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/prospective/ProspectivesList.js?");

/***/ }),

/***/ "./frontend/prospective/api-prospective.js":
/*!*************************************************!*\
  !*** ./frontend/prospective/api-prospective.js ***!
  \*************************************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst list = async signal => {\n  try {\n    let response = await fetch('/api/prospectives/', {\n      method: 'GET',\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(list, \"list\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/prospective/api-prospective.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/prospective/api-prospective.js?");

/***/ }),

/***/ "./frontend/src/components/Item.js":
/*!*****************************************!*\
  !*** ./frontend/src/components/Item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ \"date-fns/formatDistanceToNow\");\n/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ \"./frontend/src/components/button.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n// eslint-disable-next-line react/prop-types\nfunction ItemHeader({\n  route,\n  children,\n  id\n}) {\n  if (route) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      to: `${route}/${id}`,\n      relative: \"path\"\n    }, children);\n  }\n  return children;\n}\nfunction Item({\n  text,\n  createdAt,\n  deleteItem,\n  id,\n  route\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"question-details\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemHeader, {\n    route: route,\n    id: id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_2___default()(new Date(createdAt), {\n    addSuffix: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    type: \"button\",\n    handleClick: () => {\n      deleteItem(id);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"delete\")));\n}\nItem.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nItem.defaultProps = {\n  route: undefined\n};\nconst _default = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(ItemHeader, \"ItemHeader\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/Item.js\");\n  reactHotLoader.register(Item, \"Item\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/Item.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/Item.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/src/components/Item.js?");

/***/ }),

/***/ "./frontend/src/components/List.js":
/*!*****************************************!*\
  !*** ./frontend/src/components/List.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./frontend/src/components/Item.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nfunction List({\n  collection,\n  textKey,\n  childRoute,\n  ...props\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, collection.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: item._id,\n    text: item[textKey],\n    createdAt: item.createdAt,\n    deleteItem: itemId => props.deleteItem(itemId),\n    id: item._id,\n    route: childRoute\n  })));\n}\nList.propTypes = {\n  collection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape).isRequired,\n  textKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  childRoute: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nList.defaultProps = {\n  deleteItem: () => {},\n  childRoute: undefined\n};\nconst _default = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(List, \"List\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/List.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/List.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/src/components/List.js?");

/***/ }),

/***/ "./frontend/src/components/button.js":
/*!*******************************************!*\
  !*** ./frontend/src/components/button.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/* eslint-disable class-methods-use-this */\n\n\n/* eslint-disable react/destructuring-assignment */\n/* eslint-disable react/button-has-type */\n/* eslint-disable react/no-unused-state */\n/* eslint-disable no-unused-vars */\n// eslint-disable-next-line no-undef\n\n/**\n * A generic button\n */\nfunction Button({\n  children,\n  ...props\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: props.type,\n    onClick: props.handleClick\n  }, children);\n}\nButton.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]).isRequired,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nButton.defaultProps = {\n  type: 'button',\n  handleClick: () => {}\n};\n\n// class Button extends React.Component {\n//   constructor(props) {\n//     super(props);\n\n//     this.handleEvent = this.handleEvent.bind(this);\n//   }\n\n//   handleEvent(event) {\n//     // console.log(syntheticEvent instanceof MouseEvent);\n//     // console.log(syntheticEvent.nativeEvent instanceof MouseEvent);\n//     switch (event.type) {\n//       case 'click':\n//         console.log('clicked');\n//         break;\n\n//       case 'dblclick':\n//         console.log('double clicked');\n//         break;\n\n//       default:\n//         console.log('unhandled', event.type);\n//     }\n//   }\n\n//   render() {\n//     return (\n//       <button\n//         onClick={this.handleEvent}\n//         onDoubleClick={this.handleEvent}\n//       >\n//         Click me!\n//       </button>\n//     );\n//   }\n// }\nconst _default = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Button, \"Button\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/button.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/src/components/button.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/src/components/button.js?");

/***/ }),

/***/ "./frontend/theme.js":
/*!***************************!*\
  !*** ./frontend/theme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#5c67a3',\n      main: '#3f4771',\n      dark: '#2e355b',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff79b0',\n      main: '#ff4081',\n      dark: '#c60055',\n      contrastText: '#000'\n    },\n    openTitle: '#3f4771',\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"pink\"]['400'],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(theme, \"theme\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/theme.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/theme.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/theme.js?");

/***/ }),

/***/ "./frontend/user/Signup.js":
/*!*********************************!*\
  !*** ./frontend/user/Signup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-user.js */ \"./frontend/user/api-user.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/* eslint-disable jsx-a11y/label-has-associated-control */\n\n\n// import useSignup from '../hooks/useSignup';\n\n\n\n\n\n\n\nfunction Signup() {\n  // const [email, setEmail] = useState('');\n  // const [password, setPassword] = useState('');\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    password: '',\n    email: '',\n    username: '',\n    open: false,\n    error: ''\n  });\n  // const { signup, isLoading, error } = useSignup();\n\n  const handleChange = name => event => {\n    setValues({\n      ...values,\n      [name]: event.target.value\n    });\n  };\n\n  // const handleSubmit = async (e) => {\n  //   e.preventDefault();\n\n  //   await signup(email, password);\n  // };\n  const handleSubmit = e => {\n    // Without this the page will reload\n    e.preventDefault();\n    const user = {\n      username: values.username || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(user).then(data => {\n      if (data.error) {\n        setValues({\n          ...values,\n          error: data.error\n        });\n      } else {\n        setValues({\n          ...values,\n          error: '',\n          open: true\n        });\n      }\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n    className: \"signup\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h3\", null, \"Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", null, \"Name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"username\",\n    onChange: handleChange('username'),\n    value: values.username\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", null, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"email\",\n    onChange: handleChange('email'),\n    value: values.email\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", null, \"Pasword:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"password\",\n    onChange: handleChange('password'),\n    value: values.password\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \"Submit\"), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"error\"\n  }, values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))));\n}\n__signature__(Signup, \"useState{[values, setValues]({\\n    password: '',\\n    email: '',\\n    username: '',\\n    open: false,\\n    error: '',\\n  })}\");\nconst _default = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(Signup, \"Signup\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/Signup.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/Signup.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/user/Signup.js?");

/***/ }),

/***/ "./frontend/user/Users.js":
/*!********************************!*\
  !*** ./frontend/user/Users.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Users; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-user.js */ \"./frontend/user/api-user.js\");\n/* harmony import */ var _src_components_List_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/List.js */ \"./frontend/src/components/List.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n// import Paper from '@material-ui/core/Paper'\n// import List from '@material-ui/core/List'\n// import ListItem from '@material-ui/core/ListItem'\n// import ListItemAvatar from '@material-ui/core/ListItemAvatar'\n// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'\n// import ListItemText from '@material-ui/core/ListItemText'\n// import Avatar from '@material-ui/core/Avatar'\n// import IconButton from '@material-ui/core/IconButton'\n// import Typography from '@material-ui/core/Typography'\n// import ArrowForward from '@material-ui/icons/ArrowForward'\n// import Person from '@material-ui/icons/Person'\n\n\n// import Item from '../src/components/Item.js';\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing(1),\n    margin: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  }\n}));\nfunction Users() {\n  const classes = useStyles();\n  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_3__[\"list\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_List_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    collection: users,\n    textKey: \"email\",\n    titleKey: \"\",\n    deleteItem: () => {}\n  }));\n}\n__signature__(Users, \"useStyles{classes}\\nuseState{[users, setUsers]([])}\\nuseEffect{}\", () => [useStyles]);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(useStyles, \"useStyles\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/Users.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/user/Users.js?");

/***/ }),

/***/ "./frontend/user/api-user.js":
/*!***********************************!*\
  !*** ./frontend/user/api-user.js ***!
  \***********************************/
/*! exports provided: create, list, read */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst create = async user => {\n  console.log('user', user);\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst list = async signal => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'GET',\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch('/api/prospectives/' + params.userId, {\n      method: 'GET',\n      signal: signal,\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n        // 'Authorization': 'Bearer ' + credentials.t\n      }\n    });\n\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(create, \"create\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/api-user.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/api-user.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/matthewskelley/my-projects/wine-one-project/frontend/user/api-user.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./frontend/user/api-user.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>MERN Skeleton</title>\n      </head>\n      <body>\n        <div id=\"root\">${markup}</div>\n        <style id=\"jss-server-side\">${css}</style>\n        <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n      </body>\n    </html>`;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/template.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'frontend/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/matthewskelley/my-projects/wine-one-project/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/matthewskelley/my-projects/wine-one-project/webpack.config.client.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./backend/server.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/matthewskelley/my-projects/wine-one-project/backend/server.js */\"./backend/server.js\");\n\n\n//# sourceURL=webpack:///multi_./backend/server.js?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/styles%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "date-fns/formatDistanceToNow":
/*!***********************************************!*\
  !*** external "date-fns/formatDistanceToNow" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/formatDistanceToNow\");\n\n//# sourceURL=webpack:///external_%22date-fns/formatDistanceToNow%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });