import React, { useState } from "react";
import PropTypes from "prop-types";
import { inputFormats, outputFormats } from "../utils/Formats";
import "../styles/Input.css";
import Dropdown from "./Dropdown";

function Input({ onConvert }) {
  const [number, setNumber] = useState("");
  const [inputFormat, setInputFormat] = useState("decimal");
  const [outputFormat, setOutputFormat] = useState("roman");

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleInputFormatChange = (e) => {
    setInputFormat(e.target.value);
  };

  const handleOutputFormatChange = (e) => {
    setOutputFormat(e.target.value);
  };

  const handleConvert = () => {
    // Call the onConvert function passed from parent component
    onConvert(number, inputFormat, outputFormat);
  };

  return (
    <div className="input-form">
      <label htmlFor="numberInput">
        Number:
        <input
          type="text"
          id="numberInput"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <Dropdown name="inputFormatSelect" currentFormat={inputFormat} formatsToDisplay={inputFormats} handlerFunction={handleInputFormatChange} />
      <Dropdown name="outputFormatSelect" currentFormat={outputFormat} formatsToDisplay={outputFormats} handlerFunction={handleOutputFormatChange} />
      <button onClick={handleConvert} type="button">Convert</button>
    </div>
  );
}

Input.propTypes = {
  onConvert: PropTypes.func.isRequired,
};

export default Input;
