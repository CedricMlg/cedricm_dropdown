import React from "react";
import "../../styles.css"

/**
 * It's a function that takes in a label and an array of options, and returns a dropdown menu with the
 * label as the title and the options as the options
 */
export const Dropdown = ({ label, options }) => {
  return (
    <div className="dropdown">
      {" "}
      <label hmtlfor={label}>{label}</label>
      <select name={label} id={label}>
        {options.map((opt, index) => {
          return <option key={index} value={opt.value}>{opt.name}</option>;
        })}
      </select>
    </div>
  );
};
