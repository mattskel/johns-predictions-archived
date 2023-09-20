import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {predictionsForAllUsers} from './api-prediction.js';
import { listForProspective } from '../question/api-question.js';
import {list} from '../user/api-user.js';
import auth from '../auth/auth-helper'

function ForAllUsers(props) {
  const {match} = props || {};
  const jwt = auth.isAuthenticated();
  const [predictions, setPredictions] = useState({});
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    list(signal, {t: jwt.token}).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listForProspective(match.params, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setQuestions(data);
      }
    });
  }, [match.params.prospectiveId]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const prospectiveId = match.params.prospectiveId;
    const userId = jwt.user._id;

    predictionsForAllUsers({prospectiveId, userId}, signal).then((data) => {
      console.log('data', data)
      if (data && data.error) {
        console.log(data.error);
      } else {
        const groupByQuestion = _.groupBy(data, 'questionId'); // {questionId: [predictions]}
        const groupByUser = _.groupBy(data, 'userId'); // {userId: [predictions]}

        // Use the intersectionBy method to get the predictions for all questions for all users
        const _predictions = {};
        _.forEach(questions, (question) => {
          _predictions[question._id] = {};
          _.forEach(users, (user) => {
            const predictionsForQuestion = groupByQuestion[question._id] || [];
            const predictionsForUser = groupByUser[user._id] || [];
            const [predictionForQuestionForUser] = _.intersectionBy(predictionsForQuestion, predictionsForUser, '_id');
            _predictions[question._id][user._id] = predictionForQuestionForUser;
            // console.log('predictionsForQuestionForUser', predictionsForQuestionForUser)
          })
        });

        console.log('_predictions', _predictions)
        setPredictions({...predictions, ..._predictions});
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [users, questions])

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
            {users.map((user) => (
              <TableCell key={user._id}>{user.username || user.email}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question) => (
            <TableRow key={question._id}>
              <TableCell>{question.text}</TableCell>
              <TableCell>{question.answer}</TableCell>
              {users.map((user) => (
                <TableCell key={user._id}>
                  {predictions[question._id] && predictions[question._id][user._id] && predictions[question._id][user._id].prediction}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ForAllUsers;
