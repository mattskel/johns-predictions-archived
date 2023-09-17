import React, {useState, useEffect} from 'react';
import auth from '../auth/auth-helper';
import { publishedList } from './api-prospective';
import { listForUser } from '../submission/api-submission';
import { Link } from 'react-router-dom';

const prospectiveDetails = (prospective) => {
}

function Published() {
  const [published, setPublished] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const jwt = auth.isAuthenticated();
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    publishedList(signal).then((data) => {
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
        setSubmissions(data);
      }
    });
  })
  return (
    <div>
      {published.map((prospective) => (
        <div key={prospective._id}>
          <Link 
            to={`/predictions/for/${prospective._id}`}
            onClick={(event) => prospective.isClosed && event.preventDefault()}
            >{prospective.title}</Link>
          {submissions.find((submission) => submission.prospectiveId === prospective._id) && (
            <div>
              <span>
                Submitted
                {prospective.isClosed && <Link to={`/predictions/submitted/for/${prospective._id}`}>See predictions</Link>}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Published;