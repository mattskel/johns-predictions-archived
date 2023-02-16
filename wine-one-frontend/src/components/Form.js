/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

function Form({ children, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
