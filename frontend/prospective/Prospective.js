import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { read } from './api-prospective.js';

function Prospective(props) {
  const [prospective, setProspective] = useState({});
  const {match} = props || {};
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

  return (
    <div className="prospective">
      {prospective && prospective._id && (
        <div>
          <h3>{prospective.title}</h3>
        </div>
      )}
    </div>

  );
}

export default Prospective;
