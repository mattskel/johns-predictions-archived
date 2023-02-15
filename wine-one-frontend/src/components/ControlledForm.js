/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Controlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Matt',
      lastName: 'Blank',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(`${this.state.firstName} ${this.state.lastName}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Controlled;
