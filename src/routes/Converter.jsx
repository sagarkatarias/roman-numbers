import React, { useState } from "react";

import { binaryToRoman, decimalToRoman } from "../utils/Calculator";
import Output from "../components/Output";
import Input from "../components/Input";

function Converter() {
  const [result, setResult] = useState("");

  const handleConvert = (number, inputFormat, outputFormat) => {
    let convertedResult = "";

    if (inputFormat === "binary" && outputFormat === "roman") {
      convertedResult = binaryToRoman(number);
    } else if (inputFormat === "decimal" && outputFormat === "roman") {
      convertedResult = decimalToRoman(number);
    }
    setResult(convertedResult);
  };
  return (
    <>
      <h1>Number Converter</h1>
      <Input onConvert={handleConvert} />
      <Output result={result} />
    </>
  );
}

export default Converter;
