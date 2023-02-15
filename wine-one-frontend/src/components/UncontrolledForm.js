/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
import React from 'react';

class Uncontrolled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
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

    // eslint-disable-next-line react/destructuring-assignment
    console.log(`${this.state.firstName} ${this.state.lastName}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={this.handleChange} />
        <input type="text" name="lastName" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Uncontrolled;
