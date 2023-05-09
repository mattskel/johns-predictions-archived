import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

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
        {/* <h1>Prospectives</h1> */}
        <Breadcrumbs currentPage="Prospectives"/>
        <ul>
          {prospectives.map((prospective) => (
            <li key={prospective._id}>
              <Link to={`${prospective._id}/`} relative="path">{prospective.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Prospectives;
