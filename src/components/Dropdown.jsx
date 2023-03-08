import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Dropdown = ({ label, options }) => {
  return (
    <div className='dropdown'>
      {" "}
      <label for={label}>{label}</label>
      <select name={label} id={label}>
        {options.forEach((option) => {
          <option>{option}</option>;
        })}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  /**
   * Dropdown title
   */
  label: PropTypes.string.isRequired,
  /**
   * Dropdown options
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Dropdown.defaultProps = {
  label: "title",
  options: ["example1", "example2", "example3"],
};
