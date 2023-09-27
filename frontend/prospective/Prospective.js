import React, {useState, useEffect} from 'react';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { read, update } from './api-prospective.js';
import { listForProspective } from '../question/api-question.js';
import {Link, Redirect} from 'react-router-dom'
import auth from '../auth/auth-helper'

function Prospective(props) {
  const [prospective, setProspective] = useState({});
  const [questions, setQuestions] = useState([]);
  const {match} = props || {};
  const [open, setOpen] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(match.params, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setProspective(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
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

  const clickButton = () => {
    setOpen(true)
  }
  const handleRequestClose = () => {
    setOpen(false)
  }
  const deleteAccount = () => { 
    update(match.params, {t: jwt.token}, {isDeleted: true}).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setRedirect(true)
      }
    })
  }

  if (redirect) {
    return <Redirect to='/admin/prospectives'/>
  }

  return (
    <div className="prospective">
      {prospective && prospective._id && (
        <div>
          <div>
            <Typography variant="h6" color="inherit" display="inline">
            {prospective.title}
            </Typography>
            <Link to={"/admin/prospective/edit/" + prospective._id} display="inline">
              Edit
            </Link>
            <span>
            <button aria-label="Delete" onClick={clickButton} color="secondary">
              Delete
            </button>

            <dialog open={open} onClose={handleRequestClose}>
              <h1>Are you sure you want to delete this?</h1>
              <button onClick={handleRequestClose} color="primary">
                Cancel
              </button>
              <button onClick={deleteAccount} color="secondary" autoFocus="autoFocus">
                Confirm
              </button>
            </dialog>
            </span>
          </div>

          <Divider />
          
          {questions && questions.map((question) => (
            <div key={question._id}>
              {question.text}
              <Link to={"/admin/question/edit/" + question._id}>edit</Link>
            </div>
            
          ))}
          <Link to={"/admin/question/new/" + prospective._id}>
            <button color="primary" variant="contained">
              Add question
            </button>
          </Link>
        </div>
      )}
    </div>

  );
}

export default Prospective;
