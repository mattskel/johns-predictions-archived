import React from 'react';
import { Link } from 'react-router-dom';

class Prospectives extends React.Component {
  constructor(props) {
    super(props);

    this.state = { prospectives: [] };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    fetch('/api/prospectives/', { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => response.json())
      .then((prospectives) => this.setState({ prospectives }));
  }

  render() {
    const { prospectives } = this.state;
    return (
      <div>
        {prospectives.map((prospective) => (
          <div key={prospective._id}>
            <Link to={`${prospective._id}/`} relative="path">{prospective.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Prospectives;
