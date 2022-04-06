const { arrayOnly } = require("./array");

describe("Testing the array only content", () => {
  test("The return value is an Array", () => {
    expect(Array.isArray(arrayOnly())).toBe(true);
  });

  test("The array has `1`", () => {
    expect(arrayOnly()).toContain(1);
  });

  test("The third element in the array is `2`", () => {
    expect(arrayOnly()[2]).toBe(3);
  });

  test("The array has 4 elements", () => {
    expect(arrayOnly().length).toBe(4);
  });

  test("The first element is `1`", () => {
    expect(arrayOnly().indexOf(1)).toBe(0);
  });
});

describe("Testing the ")