/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
// import Button from './button';
import FormInput from './FormInput';
import Form from './Form';
import { useQuestionsDispatch } from '../hooks/useQuestionsContext';

function QuestionForm(props) {
  const dispatch = useQuestionsDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const { prospectiveId } = props;
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
    const question = { text: input.value, prospectiveId };
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
    navigate(-1);
  };

  // This will trigger a re render
  // But this is ok for small forms
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setInputs(inputs.map((input) => (name === input.name ? { ...input, value } : input)));
  };

  return (
    <Form handleSubmit={handleSubmit} error={error}>
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

      {/* <Button type="submit">
        <span>Add question</span>
      </Button>
      {error && <div className="error">{error}</div>} */}
    </Form>
  );
}

export default QuestionForm;
