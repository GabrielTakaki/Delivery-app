import React from 'react';
import PropTypes from 'prop-types';
import { LabelRegister } from '../styles/mainRegister';
import { SelectForm } from '../styles/addressDetails';

export default function Select({
  handleChange,
  name,
  text,
  testId,
  optionList,
}) {
  return (
    <LabelRegister htmlFor={ name }>
      { text }
      <SelectForm
        data-testid={ testId }
        onChange={ handleChange }
        name={ name }
      >
        { optionList.map((myOption, index) => (
          <option
            key={ index }
            value={ myOption }
          >
            { myOption }
          </option>
        ))}
      </SelectForm>
    </LabelRegister>
  );
}

Select.defaultProps = {
  text: '',
  testId: 'none',
  optionList: null,
  handleChange: null,
};

Select.propTypes = {
  testId: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  optionList: PropTypes.arrayOf(PropTypes.string),
};
