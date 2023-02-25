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

export function GenericList({
  parentId, textKey, collectionName, childRoute,
}) {
  const useInstanceContext = useCollectionContext;
  const useInstanceDispatch = useCollectionDispatch;

  const { user } = useAuthContext();
  const { collection } = useInstanceContext();
  const dispatch = useInstanceDispatch();
  const headers = { Authorization: `Bearer ${user.token}` };

  useEffect(() => {
    const fetchDocs = async () => {
      const url = parentId ? `/api/${collectionName}/${parentId}` : `/api/${collectionName}`;
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
    const response = await fetch(`/api/${collectionName}/${id}`, {
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
      <h2>{collectionName}</h2>
      <Link to="new">
        <Button><span>Create new</span></Button>
      </Link>
      <List
        collection={collection}
        textKey={textKey}
        childRoute={childRoute}
        deleteItem={(id) => deleteItem(id)}
      />
    </div>
  );
}

GenericList.propTypes = {
  parentId: PropTypes.string,
  textKey: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  childRoute: PropTypes.string,
};

GenericList.defaultProps = {
  parentId: undefined,
  childRoute: undefined,
};

export function GenericForm({
  // eslint-disable-next-line react/prop-types
  parentId, collectionName, parent, formFields,
}) {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [className, setClassName] = useState('');
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [formField] = formFields;

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

    const body = {
      [formField]: text,
      ...((parent) ? { [`${parent}Id`]: parentId } : {}),
    };

    const response = await fetch(`/api/${collectionName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(body),
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

export default function Generic({
  parent, textKey, collectionName, childRoute, formFields,
}) {
  const params = useParams();
  let parentId;
  if (parent) {
    parentId = params[`${parent}Id`];
  }

  return (
    <div className="container">
      <Routes>
        <Route
          index
          element={(
            <GenericList
              parentId={parentId}
              textKey={textKey}
              collectionName={collectionName}
              childRoute={childRoute}
            />
          )}
        />
        <Route
          path="new"
          element={(
            <GenericForm
              parentId={parentId}
              parent={parent}
              collectionName={collectionName}
              formFields={formFields}
            />
          )}
        />
      </Routes>
      <Outlet />
    </div>
  );
}

Generic.propTypes = {
  parent: PropTypes.string,
  textKey: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  childRoute: PropTypes.string,
  formFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Generic.defaultProps = {
  parent: undefined,
  childRoute: undefined,
};
