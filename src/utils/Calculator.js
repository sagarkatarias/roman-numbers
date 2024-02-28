const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

function decimalToRoman(arg) {
  let decimal = arg;

  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (decimal >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      decimal -= romanNumerals[i].value;
    }
  }
  return result;
}

function binaryToRoman(binary) {
  // Convert binary to decimal
  const decimal = parseInt(binary, 2);
  return decimalToRoman(decimal);
}
