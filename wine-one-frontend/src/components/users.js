import PropTypes from 'prop-types';
import List from './List';

function Users({ users }) {
  return (
    <div>
      <List
        collection={users}
        textKey="email"
        titleKey=""
        deleteItem={() => {}}
      />
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Users;
