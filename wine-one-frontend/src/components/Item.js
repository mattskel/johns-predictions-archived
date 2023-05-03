import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
import Button from './button';

// eslint-disable-next-line react/prop-types
function ItemHeader({ route, children, id }) {
  if (route) {
    return (
      <Link to={`${route}/${id}`} relative="path">
        {children}
      </Link>
    );
  }
  return children;
}

function Item({
  text, createdAt, deleteItem, id, route,
}) {
  return (
    <div className="question-details">
      <ItemHeader route={route} id={id}><h4>{text}</h4></ItemHeader>
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
  route: PropTypes.string,
};

Item.defaultProps = {
  route: undefined,
};

export default Item;
