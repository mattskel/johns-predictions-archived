import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
import Button from './button';

function Item({
  text, createdAt, deleteItem, id, route,
}) {
  return (
    <div className="question-details">
      <Link to={`${route}/${id}`} relative="path"><h4>{text}</h4></Link>
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
  route: PropTypes.string.isRequired,
};

export default Item;
