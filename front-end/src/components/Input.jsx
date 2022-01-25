import React from 'react';
import PropTypes from 'prop-types';
import { LabelRegister } from '../styles/mainRegister';

function Input({ text, placeholder, type, onChange, value, htmlFor, name, testId }) {
  return (
    <LabelRegister htmlFor={ htmlFor }>
      { text }
      <input
        placeholder={ placeholder }
        type={ type }
        onChange={ onChange }
        value={ value }
        name={ name }
        data-testid={ testId }
      />
    </LabelRegister>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Input;
