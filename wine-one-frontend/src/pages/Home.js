import { useEffect, useState } from "react";
import { useUsersContext } from '../hooks/useUsersContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Components
// import UserDetails from '../components/UserDetails';
// import UserForm from '../components/UserForm';
import QuestionDetails from '../components/QuestionDetails';
import QuestionForm from '../components/QuestionForm';

const Home = () => {
  // const {users, dispatch} = useUsersContext();
  // const {user} = useAuthContext()
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    // const fetchUsers = async () => {
    //   const response = await fetch('/api/users', {
    //     headers: {
    //       'Authorization': `Bearer ${user.token}`
    //     }
    //   });
    //   const json = await response.json();

    //   if (response.ok) {
    //     dispatch({type: 'SET_USERS', payload: json});
    //   }
    // }

    const fetchQuestions = async () => {
      const response = await fetch('/api/questions')
      const json = await response.json()

      if (response.ok) {
        setQuestions(json);
      }
    }

    fetchQuestions();

    // setQuestions([{text: 'This is some test text', _id: '_id'}])

    // if (user) {
    //   fetchUsers();
    // }

  }, []);

  return (
    <div className="home">
      {/* <div className="users">
        {users && users.map((user) => (
          <UserDetails key={user._id} user={user} />
        ))}
      </div>
      <UserForm />   */}
      <div className="questions">
        {questions && questions.map((question) => (
          <QuestionDetails key={question._id} question={question} />
        ))}
      </div>
      <QuestionForm />
    </div>
  )
}

export default Home;