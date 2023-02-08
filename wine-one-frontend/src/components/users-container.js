import React from 'react';
import Users from './users';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    // Might need to change this later
    // Not sure if useAuthContext is correct
    const user = JSON.parse(localStorage.getItem('user'));

    // Call the users api
    fetch('/api/users/', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => this.handleSuccess({ users: data }));
  }

  handleSuccess({ users = [] }) {
    this.setState({
      users,
    });
  }

  render() {
    return (
      <Users {...this.state} />
    );
  }
}

export default UsersContainer;
