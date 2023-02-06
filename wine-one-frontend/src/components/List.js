import PropTypes from 'prop-types';
import Item from './Item';

function List({ collection, textKey, handleClick }) {
  return (
    <ul>
      {collection.map((item) => (
        <Item
          key={item._id}
          text={item[textKey]}
          // title={item[titleKey]}
          createdAt={item.createdAt}
          handleClick={handleClick}
          id={item._id}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape).isRequired,
  textKey: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default List;
