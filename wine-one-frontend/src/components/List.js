import PropTypes from 'prop-types';
import Item from './Item';

function List({
  collection, textKey, childRoute, ...props
}) {
  return (
    <ul>
      {collection.map((item) => (
        <Item
          key={item._id}
          text={item[textKey]}
          createdAt={item.createdAt}
          deleteItem={(itemId) => props.deleteItem(itemId)}
          id={item._id}
          route={childRoute}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape).isRequired,
  textKey: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  childRoute: PropTypes.string,
};

List.defaultProps = {
  deleteItem: () => {},
  childRoute: undefined,
};

export default List;
