/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef

/**
 * A generic button
 */
function Button({ children, ...props }) {
  return (
    <button type={props.type} onClick={props.handleClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
};

// class Button extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleEvent = this.handleEvent.bind(this);
//   }

//   handleEvent(event) {
//     // console.log(syntheticEvent instanceof MouseEvent);
//     // console.log(syntheticEvent.nativeEvent instanceof MouseEvent);
//     switch (event.type) {
//       case 'click':
//         console.log('clicked');
//         break;

//       case 'dblclick':
//         console.log('double clicked');
//         break;

//       default:
//         console.log('unhandled', event.type);
//     }
//   }

//   render() {
//     return (
//       <button
//         onClick={this.handleEvent}
//         onDoubleClick={this.handleEvent}
//       >
//         Click me!
//       </button>
//     );
//   }
// }

export default Button;
