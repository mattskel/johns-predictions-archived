import PropTypes from 'prop-types';
import Item from './Item';

function List({ collection, textKey, ...props }) {
  return (
    <ul>
      {collection.map((item) => (
        <Item
          key={item._id}
          text={item[textKey]}
          createdAt={item.createdAt}
          deleteItem={(itemId) => props.deleteItem(itemId)}
          id={item._id}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape).isRequired,
  textKey: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
};

List.defaultProps = {
  deleteItem: () => {},
};

export default List;
