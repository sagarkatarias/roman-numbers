import React from "react";
import PropTypes from "prop-types";
import "../styles/Output.css";

function Output({ result }) {
  return (
    <div className="output">
      <h2>Result:</h2>
      <p>{result}</p>
    </div>
  );
}

Output.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Output;
