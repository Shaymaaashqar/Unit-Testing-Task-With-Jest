const { subjects } = require("./fixtures");

function arrayOnly() {
  const array1 = [1, 2, 3, [1, 3]];
  return array1;
}

/**
 * This function calculates the average for the passed subjects array of objects
 * It considers all the required subjects and picks the highest optional subject
 * @returns subject's average
 */
function calculateAvg() {
  const required = subjects
    .filter(({ isRequired }) => isRequired)
    .reduce(
      (acc, { max, score }) => ({
        base: acc.base + max,
        total: acc.total + score,
      }),
      { base: 0, total: 0 }
    );

  const highestOptional = [...subjects]
    .filter(({ isRequired }) => !isRequired)
    .sort((a, b) => b.score / b.max - a.score / a.max)[0];

  const avg = (required.total + highestOptional.score) / (required.base + highestOptional.max);
  return +(avg * 100).toFixed(2);
}

function getTotal(a, b, c) {
  let total = 0;
  if (a) {
    total += a.total;
  }
  if (b) {
    total += b.total;
  }
  if (c) {
    total += c.total;
  }

  return total;
}

exports.calculateAvg = calculateAvg;
exports.getTotal = getTotal;
exports.arrayOnly = arrayOnly;
