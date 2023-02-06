import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function Item({
  text, createdAt, handleClick, id,
}) {
  return (
    <div className="question-details">
      <h4>{text}</h4>
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <span onClick={() => handleClick(id)} aria-hidden="true">delete</span>
    </div>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
