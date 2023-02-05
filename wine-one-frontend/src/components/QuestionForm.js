/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import useQuestionsContext from '../hooks/useQuestionsContext';
import useAuthContext from '../hooks/useAuthContext';

function QuestionForm() {
  const { dispatch } = useQuestionsContext();
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const question = { text };
    const response = await fetch('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(question),
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      return;
    }

    setText('');
    setError(null);
    setEmptyFields([]);
    dispatch({ type: 'CREATE_QUESTION', payload: json });
  };

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>Add new question</h3>
      <label>
        Text for question
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className={emptyFields.includes('text') ? 'error' : ''}
        />
      </label>

      <button type="submit">Add question</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default QuestionForm;
