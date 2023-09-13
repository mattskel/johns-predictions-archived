import React, {useState, useEffect} from 'react';
// import { Outlet } from 'react-router-dom';
// import Breadcrumbs from '../components/Breadcrumbs';
// import { Link } from '@material-ui/core';
import { publishedList } from './api-prospective';
import { Link } from 'react-router-dom';

function Published() {
  const [published, setPublished] = useState([]);
  
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
  return (
    <div>
      {published.map((prospective) => (
        <div key={prospective._id}>
          <Link to={`/predictions/for/${prospective._id}`}>{prospective.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Published;