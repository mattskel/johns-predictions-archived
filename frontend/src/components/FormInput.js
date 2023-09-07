/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

function FormInput({
  label, type, onChange, value, name, className,
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        className={className}
      />
    </label>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  className: '',
};

export default FormInput;
