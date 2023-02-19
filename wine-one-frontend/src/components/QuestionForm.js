/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import Button from './button';
import FormInput from './FormInput';
import Form from './Form';
import { useQuestionsDispatch } from '../hooks/useQuestionsContext';

function QuestionForm() {
  const dispatch = useQuestionsDispatch();
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const [inputs, setInputs] = useState([{
    type: 'text',
    label: 'Label',
    name: 'label',
    value: '',
    className: '',
  }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [input] = inputs;
    const question = { text: input.value };
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
      setInputs([{ ...input, className: 'error' }]);
      return;
    }

    setError(null);
    setInputs([{ ...input, className: '', value: '' }]);
    dispatch({ type: 'CREATE_QUESTION', payload: json });
  };

  // This will trigger a re render
  // But this is ok for small forms
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setInputs(inputs.map((input) => (name === input.name ? { ...input, value } : input)));
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <h3>Add new question</h3>

      {inputs.map((input, index) => (
        <FormInput
          label={input.label}
          type={input.type}
          key={index}
          name={input.name}
          onChange={handleChange}
          value={input.value}
          className={input.className}
        />
      ))}

      <Button type="submit">
        <span>Add question</span>
      </Button>
      {error && <div className="error">{error}</div>}
    </Form>
  );
}

export default QuestionForm;
