import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {list} from './api-prospective.js';

const ProspectivesList = () => {
  const [prospectives, setProspectives] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setProspectives(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {prospectives.map((prospective) => (
        <div key={prospective._id}>
          <Link to={`${prospective._id}/`} relative="path">{prospective.title}</Link>
        </div>
      ))}
    </div>
  );
  
}

export default ProspectivesList;
