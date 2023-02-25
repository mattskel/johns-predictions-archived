import {
  Routes, Route, Link, useNavigate, Outlet, useParams,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import List from '../components/List';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import Button from '../components/button';
import useAuthContext from '../hooks/useAuthContext';
import { useCollectionContext, useCollectionDispatch } from '../hooks/useCollectionContext';

// eslint-disable-next-line react/prop-types
export function GenericList({ parentId, textKey }) {
  const useInstanceContext = useCollectionContext;
  const useInstanceDispatch = useCollectionDispatch;

  const { user } = useAuthContext();
  const { collection } = useInstanceContext();
  const dispatch = useInstanceDispatch();
  const headers = { Authorization: `Bearer ${user.token}` };

  useEffect(() => {
    const fetchDocs = async () => {
      const url = parentId ? `/api/options/${parentId}` : '/api/options';
      const response = await fetch(url, { headers });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET', payload: json });
      }
    };

    if (user) {
      fetchDocs();
    }
  }, []);

  const deleteItem = async (id) => {
    const response = await fetch(`/api/options/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE', payload: json });
    }
  };

  return (
    <div>
      <h2>Options</h2>
      <Link to="new">
        <Button><span>New Option</span></Button>
      </Link>
      <List collection={collection} textKey={textKey} childRoute="options" deleteItem={(id) => deleteItem(id)} />
    </div>
  );
}

GenericList.propTypes = {
  parentId: PropTypes.string,
};

GenericList.defaultProps = {
  parentId: undefined,
};

// eslint-disable-next-line react/prop-types
export function GenericForm({ parentId }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [className, setClassName] = useState('');
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const parent = 'question';

  const props = {
    type: 'text',
    label: 'Option',
    name: 'title',
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/options', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ text, [`${parent}Id`]: parentId }),
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setClassName('error');
      return;
    }

    setError(null);
    setText('');
    setClassName('');
    navigate(-1);
  };

  return (
    <Form handleSubmit={handleSubmit} error={error}>
      <FormInput onChange={handleChange} value={text} className={className} {...props} />
    </Form>
  );
}

export default function Generic({ parent, textKey }) {
  const params = useParams();
  let parentId;
  if (parent) {
    parentId = params[`${parent}Id`];
  }

  return (
    <div className="container">
      <Routes>
        <Route index element={<GenericList parentId={parentId} textKey={textKey} />} />
        <Route path="new" element={<GenericForm parentId={parentId} />} />
      </Routes>
      <Outlet />
    </div>
  );
}

Generic.propTypes = {
  parent: PropTypes.string,
  textKey: PropTypes.string.isRequired,
};

Generic.defaultProps = {
  parent: undefined,
};
