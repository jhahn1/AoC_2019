const _ = require("lodash");

const rocketEquation = input => {
  let sum = 0;
  if (typeof input === "number") {
    return sum += Math.floor(input/3) - 2;
  }
  const parsedInput = input
    .split("\n")
    .map(x => x.trim())
    .map(x => parseInt(x));

  _.forEach(parsedInput, function(mass) {
    sum += Math.floor(mass/3) - 2;
  });
  return sum;
};

module.exports = rocketEquation;
