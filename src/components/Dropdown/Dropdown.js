import React from "react";

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
        {options.map((opt) => {
          return <option value={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
};