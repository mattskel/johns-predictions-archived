import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
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

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '85vh',
  },
  container: {
    maxHeight: '100%',
  },
  firstColumn: {
    position: '-webkit-sticky',
    position: 'sticky',
    background: '#fff',
    left: 0,
    zIndex: 1,
  },
  questionCell: {
    zIndex: 99,
  }
});

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
          })
        });

        setPredictions({...predictions, ..._predictions});
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [users, questions])

  const classes = useStyles();
  const getBackgroundColor = (answer, questionId, userId) => {
    if (!answer) {
      return '#fff';
    }
    const prediction = predictions[questionId] && predictions[questionId][userId] && predictions[questionId][userId].prediction;
    if (answer === prediction) {
      return '#d4edda';
    }
    return '#f8d7da';
  }

  return (
    <div className={classes.root}>
      <Typography variant="h6" color="inherit" display="inline">
        All predictions
      </Typography> 
      <Divider />
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.questionCell}>Question</TableCell>
            <TableCell >Answer</TableCell>
            {users.map((user) => (
              <TableCell key={user._id}>{user.username || user.email}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question) => (
            <TableRow key={question._id}>
              <TableCell className={classes.firstColumn}>{question.text}</TableCell>
              <TableCell>{question.answer}</TableCell>
              {users.map((user) => (
                <TableCell key={user._id} style={{background: getBackgroundColor(question.answer, question._id, user._id)}}>
                  {predictions[question._id] && predictions[question._id][user._id] && predictions[question._id][user._id].prediction}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ForAllUsers;
