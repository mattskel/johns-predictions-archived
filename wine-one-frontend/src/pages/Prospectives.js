import {
  Routes, Route, Link, useNavigate, useParams, Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import List from '../components/List';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import Button from '../components/button';
import Questions from './Questions';
import { QuestionsContextProvider } from '../context/QuestionsContext';
import useAuthContext from '../hooks/useAuthContext';
import { useCollectionContext, useCollectionDispatch } from '../hooks/useCollectionContext';

export function ProspectivesList() {
  const useProspectivesContext = useCollectionContext;
  const useProspectivesDispatch = useCollectionDispatch;

  const { user } = useAuthContext();
  const { collection } = useProspectivesContext();
  const dispatch = useProspectivesDispatch();
  const headers = { Authorization: `Bearer ${user.token}` };
  const textKey = 'title';

  useEffect(() => {
    const fetchProspectives = async () => {
      const response = await fetch('/api/prospectives', { headers });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET', payload: json });
      }
    };

    if (user) {
      fetchProspectives();
    }
  }, []);

  const deleteItem = async (id) => {
    const response = await fetch(`/api/prospectives/${id}`, {
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
      <h2>Prospectives</h2>
      <Link to="new">
        <Button><span>New prospective</span></Button>
      </Link>
      <List collection={collection} textKey={textKey} childRoute="questions" deleteItem={(id) => deleteItem(id)} />
    </div>
  );
}

export function ProspectiveForm() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [className, setClassName] = useState('');
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const props = {
    type: 'text',
    label: 'Prospective title',
    name: 'title',
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/prospectives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ title }),
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setClassName('error');
      return;
    }

    setError(null);
    setTitle('');
    setClassName('');
    // Dispatch goes here
    navigate(-1);
  };

  return (
    <Form handleSubmit={handleSubmit} error={error}>
      <FormInput onChange={handleChange} value={title} className={className} {...props} />
    </Form>
  );
}

function Dashboard() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function Prospectives() {
  const { prospectiveId } = useParams();
  return (
    <div className="prospectives-container">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<ProspectivesList />} />
          <Route path="new" element={<ProspectiveForm />} />
          <Route path="questions/:prospectiveId/*" element={<QuestionsContextProvider><Questions prospectiveId={prospectiveId} /></QuestionsContextProvider>} />
        </Route>
      </Routes>
    </div>
  );
}
