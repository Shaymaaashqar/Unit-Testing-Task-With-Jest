const arrayTesting = require("./array");

test(" test case", () => {
  expect(Array.isArray(arrayTesting())).toBe(true);
});

test(" test case", () => {
  expect(arrayTesting()).toContain(1);
});

test(" test case", () => {
  expect(arrayTesting()[2]).toBe(3);
});

test(" test case", () => {
  expect(arrayTesting().length).toBe(4);
});

test(" test case", () => {
  expect(arrayTesting().indexOf(1)).toBe(0);
});
