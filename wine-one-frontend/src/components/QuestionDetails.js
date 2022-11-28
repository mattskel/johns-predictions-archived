import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const QuestionDetails = ({question}) => {
  return (
    <div className="question-details">
      <h4>{question.text}</h4>
      {/* <p>{formatDistanceToNow( new Date(question.createdAt), {addSuffix: true})}</p> */}
    </div>
  )
}

export default QuestionDetails