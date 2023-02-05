/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Click me!',
    };
  }

  render() {
    return <button>{this.props.text}</button>;
  }
}
