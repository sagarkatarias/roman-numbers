import React from "react";
import PropTypes from "prop-types";
import "../styles/Output.css";

function Dropdown({
  name, currentFormat, formatsToDisplay, handlerFunction,
}) {
  return (
    <label htmlFor={name}>
      Input Format:
      <select
        id={name}
        value={currentFormat}
        onChange={handlerFunction}
      >
        {formatsToDisplay.map((format) => (
          <option key={format.value} value={format.value}>
            {format.label}
          </option>
        ))}
      </select>
    </label>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  currentFormat: PropTypes.string.isRequired,
  handlerFunction: PropTypes.func.isRequired,
  formatsToDisplay: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Dropdown;
