import {useState} from 'react';

const QuestionForm = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const question = {text}
    const response = await fetch('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question)
    });

    const json = response.json();
    if (!response.ok) {
      setError(json.error);
      return;
    }

    setText('');
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>Add new question</h3>
      <label>Text for question</label>
      <input 
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <button>Add question</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default QuestionForm