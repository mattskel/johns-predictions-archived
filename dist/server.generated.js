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

/***/ "./backend/controllers/predictionController.js":
/*!*****************************************************!*\
  !*** ./backend/controllers/predictionController.js ***!
  \*****************************************************/
/*! exports provided: getPredictions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPredictions\", function() { return getPredictions; });\n/* harmony import */ var _models_predictionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/predictionModel */ \"./backend/models/predictionModel.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const Prediction = require('../models/predictionModel');\n\nconst getPredictions = async (req, res) => {\n  const {\n    prospectiveId\n  } = req.query;\n  const {\n    _id: userId\n  } = req.user;\n  let query = {\n    userId\n  };\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const predictions = await _models_predictionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(predictions);\n};\n\n// module.exports = {\n//   getPredictions\n// }\n// export default { getPredictions }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(getPredictions, \"getPredictions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/predictionController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/predictionController.js?");

/***/ }),

/***/ "./backend/controllers/prospectiveController.js":
/*!******************************************************!*\
  !*** ./backend/controllers/prospectiveController.js ***!
  \******************************************************/
/*! exports provided: createProspective, getPropsectives, submitProspective, getPropsective, deleteProspective, getProspectiveQuestionsAndPredictions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProspective\", function() { return createProspective; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPropsectives\", function() { return getPropsectives; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitProspective\", function() { return submitProspective; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPropsective\", function() { return getPropsective; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProspective\", function() { return deleteProspective; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProspectiveQuestionsAndPredictions\", function() { return getProspectiveQuestionsAndPredictions; });\n/* harmony import */ var _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/prospectiveModel.js */ \"./backend/models/prospectiveModel.js\");\n/* harmony import */ var _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/questionModel.js */ \"./backend/models/questionModel.js\");\n/* harmony import */ var _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/predictionModel.js */ \"./backend/models/predictionModel.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst Prospective = require('../models/prospectiveModel.js');\nconst Question = require('../models/questionModel.js');\nconst Prediction = require('../models/predictionModel');\nconst mongoose = require('mongoose');\n*/\n\n\n\n\nconst createProspective = async (req, res) => {\n  const {\n    title\n  } = req.body;\n  const emptyFields = [];\n  if (!title) {\n    emptyFields.push('title');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const prospective = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      title\n    });\n    res.status(200).json(prospective);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsectives = async (req, res) => {\n  let query = {};\n  const prospectives = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(prospectives);\n};\n\n// The submission from the prospective\nconst submitProspective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const submission = req.body;\n\n  // Validation\n  // Get the questions for this prospective\n  const emptyFields = [];\n  const questions = await _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    prospectiveId\n  }, {\n    _id: 1\n  });\n  questions.forEach(({\n    _id\n  }) => {\n    const questionId = _id.toString();\n    if (submission[questionId] === undefined) {\n      emptyFields.push(questionId);\n    }\n  });\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // Finally can insert the Answers\n  const insertArray = [];\n  const userId = req.user._id;\n  Object.keys(submission).map(questionId => {\n    const prediction = submission[questionId];\n    insertArray.push({\n      userId,\n      questionId,\n      prediction\n    });\n  });\n  try {\n    const predictions = await Promise.all(insertArray.map(insert => _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].replaceOne({\n      userId: insert.userId,\n      questionId: insert.questionId\n    }, {\n      ...insert\n    }, {\n      upsert: true\n    })));\n    res.status(200).json(predictions);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getPropsective = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  if (!prospectiveId) {\n    return res.status(400).json({\n      error: 'prospectiveId is null or undefined.'\n    });\n  }\n  let query = {\n    _id: prospectiveId\n  };\n  const prospective = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne(query);\n  res.status(200).json(prospective);\n};\nconst deleteProspective = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const prospective = await _models_prospectiveModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!prospective) {\n    return res.status(400).json({\n      error: 'Prospective not found'\n    });\n  }\n  res.status(200).json(prospective);\n};\nconst getProspectiveQuestionsAndPredictions = async (req, res) => {\n  const {\n    id: prospectiveId\n  } = req.params;\n  const {\n    _id: userId\n  } = req.user;\n  const questions = await _models_questionModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    prospectiveId\n  }, {\n    _id: 1,\n    prospectiveId: 1,\n    answer: 1,\n    text: 1\n  });\n  const questionIds = questions.map(({\n    _id\n  }) => _id);\n  const predictions = await _models_predictionModel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n    userId,\n    questionId: {\n      $in: questionIds\n    }\n  }, {\n    _id: 1,\n    prediction: 1,\n    questionId: 1,\n    userId: 1\n  });\n  const questionsAndPredictions = questions.map(question => {\n    const {\n      answer,\n      _id: questionId,\n      text\n    } = question;\n    const {\n      prediction\n    } = predictions.find(({\n      questionId: predictionQuestionId\n    }) => predictionQuestionId.toString() === questionId.toString()) || {};\n    return {\n      answer,\n      questionId,\n      text,\n      prediction\n    };\n  });\n  res.status(200).json(questionsAndPredictions);\n};\n\n// module.exports = {\n//   createProspective,\n//   getPropsectives,\n//   submitProspective,\n//   getPropsective,\n//   deleteProspective,\n//   getProspectiveQuestionsAndPredictions,\n// }\n\n// export default {\n//   createProspective,\n//   getPropsectives,\n//   submitProspective,\n//   getPropsective,\n//   deleteProspective,\n//   getProspectiveQuestionsAndPredictions,\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createProspective, \"createProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(getPropsectives, \"getPropsectives\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(submitProspective, \"submitProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(getPropsective, \"getPropsective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(deleteProspective, \"deleteProspective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n  reactHotLoader.register(getProspectiveQuestionsAndPredictions, \"getProspectiveQuestionsAndPredictions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/prospectiveController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/prospectiveController.js?");

/***/ }),

/***/ "./backend/controllers/questionController.js":
/*!***************************************************!*\
  !*** ./backend/controllers/questionController.js ***!
  \***************************************************/
/*! exports provided: createQuestion, getQuestions, deleteQuestion, updateQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createQuestion\", function() { return createQuestion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQuestions\", function() { return getQuestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteQuestion\", function() { return deleteQuestion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateQuestion\", function() { return updateQuestion; });\n/* harmony import */ var _models_questionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/questionModel */ \"./backend/models/questionModel.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst Question = require('../models/questionModel');\nconst mongoose = require('mongoose');\n*/\n\n\nconst createQuestion = async (req, res) => {\n  const {\n    text,\n    prospectiveId,\n    options\n  } = req.body;\n  const emptyFields = [];\n  if (!text) {\n    emptyFields.push('text');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in the required fields',\n      emptyFields\n    });\n  }\n  try {\n    const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      text,\n      prospectiveId,\n      options\n    });\n    res.status(200).json(question);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\nconst getQuestions = async (req, res) => {\n  const {\n    prospectiveId\n  } = req.query;\n  let query = {};\n  if (prospectiveId) {\n    query.prospectiveId = prospectiveId;\n  }\n  const questions = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(query).sort({\n    createdAt: -1\n  });\n  res.status(200).json(questions);\n};\nconst deleteQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\nconst updateQuestion = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  const update = req.body || {};\n  const question = await _models_questionModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    ...update\n  });\n  if (!question) {\n    return res.status(400).json({\n      error: 'Question not found'\n    });\n  }\n  res.status(200).json(question);\n};\n\n// module.exports = {\n//   createQuestion,\n//   getQuestions,\n//   deleteQuestion,\n//   updateQuestion\n// }\n\n// export default {\n//   createQuestion,\n//   getQuestions,\n//   deleteQuestion,\n//   updateQuestion\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(createQuestion, \"createQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n  reactHotLoader.register(getQuestions, \"getQuestions\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n  reactHotLoader.register(deleteQuestion, \"deleteQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n  reactHotLoader.register(updateQuestion, \"updateQuestion\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/questionController.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/questionController.js?");

/***/ }),

/***/ "./backend/controllers/user.controller.js":
/*!************************************************!*\
  !*** ./backend/controllers/user.controller.js ***!
  \************************************************/
/*! exports provided: getUser, createUser, deleteUser, updateUser, getUsers, loginUser, signupUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUser\", function() { return deleteUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUser\", function() { return updateUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginUser\", function() { return loginUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signupUser\", function() { return signupUser; });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./backend/models/user.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst User = require('../models/user.model');\nconst mongoose = require('mongoose');\nconst jwt = require('jsonwebtoken');\n*/\n\n\n\n\n// get a single user\nconst getUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n  if (!user) {\n    return res.status(404).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// create a new user\nconst createUser = async (req, res) => {\n  const {\n    username,\n    password,\n    email\n  } = req.body;\n  const emptyFields = [];\n  if (!username) {\n    emptyFields.push('username');\n  }\n  if (!password) {\n    emptyFields.push('password');\n  }\n  if (!email) {\n    emptyFields.push('email');\n  }\n  if (emptyFields.length > 0) {\n    return res.status(400).json({\n      error: 'Please fill in all the fields',\n      emptyFields\n    });\n  }\n\n  // add doc to db\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      username,\n      password,\n      email\n    });\n    res.status(200).json(user);\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// delete a user\nconst deleteUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n    _id: id\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// update a user\nconst updateUser = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId.isValid(id)) {\n    return res.status(404).json({\n      error: 'Id is not valid'\n    });\n  }\n  const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    ...req.body\n  });\n  if (!user) {\n    return res.status(400).json({\n      error: 'User not found'\n    });\n  }\n  res.status(200).json(user);\n};\n\n// get all the users\nconst getUsers = async (req, res) => {\n  const users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).sort({\n    createdAt: -1\n  });\n  res.status(200).json(users);\n};\nconst createToken = _id => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n    _id\n  }, process.env.SECRET, {\n    expiresIn: '3d'\n  });\n};\n\n// login user\nconst loginUser = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].login(email, password);\n    const {\n      isAdmin\n    } = user;\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({\n      email,\n      token,\n      isAdmin\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// signup user\nconst signupUser = async (req, res) => {\n  const {\n    email,\n    password\n  } = req.body;\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].signup(email, password);\n\n    // create a token\n    const token = createToken(user._id);\n    res.status(200).json({\n      email,\n      token\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n// module.exports = {\n//   getUser,\n//   createUser,\n//   deleteUser,\n//   updateUser,\n//   getUsers,\n//   loginUser,\n//   signupUser\n// }\n\n// export default {\n//   getUser,\n//   createUser,\n//   deleteUser,\n//   updateUser,\n//   getUsers,\n//   loginUser,\n//   signupUser\n// }\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(getUser, \"getUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(createUser, \"createUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(deleteUser, \"deleteUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(updateUser, \"updateUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(getUsers, \"getUsers\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(createToken, \"createToken\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(loginUser, \"loginUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n  reactHotLoader.register(signupUser, \"signupUser\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/controllers/user.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/controllers/user.controller.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./backend/routes/user.routes.js\");\n/* harmony import */ var _routes_questions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/questions */ \"./backend/routes/questions.js\");\n/* harmony import */ var _routes_prospectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/prospectives */ \"./backend/routes/prospectives.js\");\n/* harmony import */ var _routes_predictions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/predictions */ \"./backend/routes/predictions.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./devBundle */ \"./backend/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import userRoutes from './routes/user.routes'\n// import authRoutes from './routes/auth.routes'\n\n// comment out before building for production\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// comment out before building for production\n_devBundle__WEBPACK_IMPORTED_MODULE_12__[\"default\"].compile(app);\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\n// app.use(cors())\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('static'));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\n\n// routes\napp.use('/api/users', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/api/user', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/api/questions', _routes_questions__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/api/prospectives', _routes_prospectives__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use('/api/predictions', _routes_predictions__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\napp.get('/', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n});\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/express.js\");\n  reactHotLoader.register(app, \"app\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/express.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/express.js?");

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

/***/ "./backend/models/prospectiveModel.js":
/*!********************************************!*\
  !*** ./backend/models/prospectiveModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n\nconst prospectiveSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Prospective = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Prospective', prospectiveSchema);\n// module.exports = Prospective;\nconst _default = Prospective;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(prospectiveSchema, \"prospectiveSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospectiveModel.js\");\n  reactHotLoader.register(Prospective, \"Prospective\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospectiveModel.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/prospectiveModel.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/models/prospectiveModel.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n// const mongoose = require('mongoose');\n// const bcrypt = require('bcrypt');\n// const validator = require('validator');\n\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  username: {\n    type: String\n    // required: true\n  },\n\n  isAdmin: {\n    type: Boolean\n  }\n}, {\n  timestamps: true\n});\n\n// static signup method\nuserSchema.statics.signup = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  if (!validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmail(email)) {\n    throw Error('Email is not valid');\n  }\n  // if (!validator.isStrongPassword) {\n  //   throw Error('Password is not string enough')\n  // }\n\n  const exists = await this.findOne({\n    email\n  });\n  if (exists) {\n    throw Error('Email already exists');\n  }\n  const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10);\n  const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(password, salt);\n  const user = await this.create({\n    email,\n    password: hash\n  });\n  return user;\n};\n\n// static login method\nuserSchema.statics.login = async function (email, password) {\n  // validation\n  if (!email || !password) {\n    throw Error('All fields are required');\n  }\n  const user = await this.findOne({\n    email\n  });\n  if (!user) {\n    throw Error('Incorrect email');\n  }\n  const match = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password);\n  if (!match) {\n    throw Error('Incorrect password');\n  }\n  return user;\n};\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);\n// module.exports = User;\nconst _default = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(userSchema, \"userSchema\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n  reactHotLoader.register(User, \"User\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/models/user.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/models/user.model.js?");

/***/ }),

/***/ "./backend/routes/predictions.js":
/*!***************************************!*\
  !*** ./backend/routes/predictions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_predictionController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/predictionController.js */ \"./backend/controllers/predictionController.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./backend/middleware/requireAuth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  getPredictions\n} = require('../controllers/predictionController');\nconst requireAuth = require('../middleware/requireAuth');\n */\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.get('/', _controllers_predictionController_js__WEBPACK_IMPORTED_MODULE_1__[\"getPredictions\"]);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/predictions.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/predictions.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/predictions.js?");

/***/ }),

/***/ "./backend/routes/prospectives.js":
/*!****************************************!*\
  !*** ./backend/routes/prospectives.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/prospectiveController */ \"./backend/controllers/prospectiveController.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./backend/middleware/requireAuth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  createProspective,\n  getPropsectives,\n  submitProspective,\n  getPropsective,\n  deleteProspective,\n  getProspectiveQuestionsAndPredictions\n} = require('../controllers/prospectiveController')\nconst requireAuth = require('../middleware/requireAuth');\n*/\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.post('/', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__[\"createProspective\"]);\nrouter.get('/', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__[\"getPropsectives\"]);\nrouter.get('/:id', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__[\"getPropsective\"]);\nrouter.delete('/:id', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__[\"deleteProspective\"]);\nrouter.post('/:id/submit', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__[\"submitProspective\"]);\nrouter.get('/:id/questions-and-predictions', _controllers_prospectiveController__WEBPACK_IMPORTED_MODULE_1__[\"getProspectiveQuestionsAndPredictions\"]);\n\n// module.exports = router;\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/prospectives.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/prospectives.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/prospectives.js?");

/***/ }),

/***/ "./backend/routes/questions.js":
/*!*************************************!*\
  !*** ./backend/routes/questions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/questionController */ \"./backend/controllers/questionController.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./backend/middleware/requireAuth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n *\nconst express = require('express');\n\nconst {\n  createQuestion,\n  getQuestions,\n  deleteQuestion,\n  updateQuestion\n} = require('../controllers/questionController');\nconst requireAuth = require('../middleware/requireAuth');\n */\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// We want to protect all these routes\n// A user must be authenticated to request these routes\nrouter.use(_middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.post('/', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__[\"createQuestion\"]);\nrouter.get('/', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__[\"getQuestions\"]);\nrouter.delete('/:id', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__[\"deleteQuestion\"]);\nrouter.patch('/:id', _controllers_questionController__WEBPACK_IMPORTED_MODULE_1__[\"updateQuestion\"]);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/questions.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/questions.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/questions.js?");

/***/ }),

/***/ "./backend/routes/user.routes.js":
/*!***************************************!*\
  !*** ./backend/routes/user.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./backend/controllers/user.controller.js\");\n/* harmony import */ var _middleware_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/requireAuth */ \"./backend/middleware/requireAuth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n/**\n * \nconst express = require('express');\nconst {\n  createUser,\n  getUser,\n  deleteUser,\n  updateUser,\n  getUsers,\n  loginUser,\n  signupUser\n} = require('../controllers/user.controller');\nconst requireAuth = require('../middleware/requireAuth');\n*/\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n// login route\nrouter.post('/login', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"loginUser\"]);\n\n// signup router\nrouter.post('/signup', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"signupUser\"]);\n\n/**\n * Don't need auth for login and signup\n * Normally login and signup would be in a different route file\n * Because they are in the same file need to put them before the auth\n */\n\n// require auth for all routes\n// router.use(requireAuth);\n\n// POST a new user\nrouter.post('/', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"]);\n\n// GET an existing user\nrouter.get('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"getUser\"]);\n\n// GET all users\nrouter.get('/', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"getUsers\"]);\n\n// DELETE a user\nrouter.delete('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"deleteUser\"]);\n\n// PATCH a user\nrouter.patch('/:id', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"updateUser\"]);\n\n// module.exports = router\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/backend/routes/user.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./backend/routes/user.routes.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst _default = () => {\n  return `<!doctype html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>MERN Skeleton</title>\n      </head>\n      <body>\n        <div id=\"root\">Hello World</div>\n        <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n      </body>\n    </html>`;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(_default, \"default\", \"/Users/matthewskelley/my-projects/wine-one-project/template.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

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