import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Button from './button';

function Item({
  text, createdAt, deleteItem, id,
}) {
  return (
    <div className="question-details">
      <h4>{text}</h4>
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <Button type="button" handleClick={() => { deleteItem(id); }}>
        <span>delete</span>
      </Button>
    </div>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
