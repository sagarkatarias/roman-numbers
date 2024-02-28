import { binaryToRoman, decimalToRoman } from "../utils/Calculator";
import "@testing-library/jest-dom";

describe("binaryToRoman function", () => {
  test("converts binary \"10111\" to Roman numeral \"XXIII\"", () => {
    expect(binaryToRoman("10111")).toBe("XXIII");
  });

  test("converts binary \"1101\" to Roman numeral \"XIII\"", () => {
    expect(binaryToRoman("1101")).toBe("XIII");
  });

  test("converts binary \"1001\" to Roman numeral \"IX\"", () => {
    expect(binaryToRoman("1001")).toBe("IX");
  });
});

describe("decimalToRoman function", () => {
  test("converts decimal \"23\" to Roman numeral \"XXIII\"", () => {
    expect(decimalToRoman("23")).toBe("XXIII");
  });

  test("converts decimal \"45\" to Roman numeral \"XLV\"", () => {
    expect(decimalToRoman("45")).toBe("XLV");
  });

  test("converts decimal \"9\" to Roman numeral \"IX\"", () => {
    expect(decimalToRoman("9")).toBe("IX");
  });
});
