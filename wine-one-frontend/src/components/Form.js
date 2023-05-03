/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import Button from './button';

function Form({
  children, handleSubmit, error, submitLabel,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
      <Button type="submit">
        <span>{submitLabel}</span>
      </Button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitLabel: PropTypes.string,
};

Form.defaultProps = {
  error: null,
  submitLabel: 'Submit',
};

export default Form;
