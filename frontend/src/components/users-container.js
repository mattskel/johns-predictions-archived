/* eslint-disable import/no-extraneous-dependencies */
// import { renameProp, compose } from 'recompose';
import Users from './users';
import withFetch from './withFetch';

const user = JSON.parse(localStorage.getItem('user')) || {};
const fetchUrl = '/api/users/';
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
};

// eslint-disable-next-line react/prop-types
function UsersContainer({ users = [] }) {
  return <Users users={users} />;
}

// const enhance = compose(
//   renameProp('data', 'users'),
// );

// const EnhancedUsersContainer = enhance(UsersContainer);
const withUsers = withFetch((props) => (
  { fetchUrl: props.fetchUrl, fetchOptions: props.fetchOptions }
));

const ContainerWithUsers = withUsers(UsersContainer);
// eslint-disable-next-line func-names
export default function () {
  return <ContainerWithUsers fetchUrl={fetchUrl} fetchOptions={fetchOptions} />;
}
