const _ = require("lodash");

let sum = 0;

const rocketEquationPart2 = input => {
  if (typeof input === "number") {
    const newInput = Math.floor(input / 3) - 2;
    return newInput > 0
      ? ((sum += newInput), rocketEquationPart2(newInput))
      : sum;
  } else {
    const parsedInput = input
      .split("\n")
      .map(x => x.trim())
      .map(x => parseInt(x));

    _.forEach(parsedInput, function(mass) {
      const newInput = Math.floor(mass / 3) - 2;
      return newInput > 0
        ? ((sum += newInput), rocketEquationPart2(newInput))
        : sum;
    });
  }
};

module.exports = rocketEquationPart2;
