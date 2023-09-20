import React, {useState, useEffect} from 'react';
import auth from '../auth/auth-helper';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
import { publishedList } from './api-prospective';
import { listForUser } from '../submission/api-submission';
import { Link } from 'react-router-dom';

function Published() {
  const [published, setPublished] = useState([]);
  const [submissions, setSubmissions] = useState({});
  const jwt = auth.isAuthenticated();
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    publishedList(signal, {t: jwt.token}).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setPublished(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const userId = jwt.user._id;
    listForUser({userId}, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        const _submissions = data.reduce((acc, submission) => {
          console.log('submission', submission)
          acc[submission.prospectiveId] = submission;
          return acc;
        }, {});
        console.log('submissions', _submissions);
        setSubmissions(_submissions);
      }
    });
  }, [published])
  return (
    <div>
      <div className="predictions">
      <Typography variant="h6" color="inherit" display="inline">
        My Predictions
      </Typography> 
      <Divider />
      </div>
      {published.map(({_id: prospectiveId, isClosed, title}) => (
        <div key={prospectiveId}>
          {/* <Link 
            to={`/predictions/for/${prospective._id}`}
            onClick={(event) => prospective.isClosed && event.preventDefault()}
            >{prospective.title}</Link> */}
          {title}
          <span>
          {!isClosed && !submissions[prospectiveId] && <Link to={`/predictions/for/${prospectiveId}`}>Submit predictions</Link>}
          {!isClosed && submissions[prospectiveId] && <Link to={`/predictions/edit/for/${prospectiveId}`}>Edit predictions</Link>}
          {isClosed && <> Submissions are now closed <Link to={`/predictions/submitted/for/${prospectiveId}`}>See predictions</Link></>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Published;