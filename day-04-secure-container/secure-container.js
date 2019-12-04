const secureContainer = input => {
  const rangeList = input
    .split("-")
    .map(x => x.trim())
    .map(x => parseInt(x));
  let possiblePasswordCount = 0;

  for (let i = rangeList[0]; i <= rangeList[1]; i++) {
    if (passesConditions(i)) {
      possiblePasswordCount++;
    }
  }
  return possiblePasswordCount;
};

const passesConditions = number => {
  const digits = number
    .toString()
    .split("")
    .map(x => x.trim())
    .map(x => parseInt(x));
  let hasDoubleDigit = false;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    } else {
      if (digits[i] === digits[i + 1] && digits[i] !== digits[i + 2] && digits[i] !== digits[i -1]) {
          hasDoubleDigit = true;
      }
    }
  }

  if (hasDoubleDigit) {
    return true;
  } else {
    return false;
  }
};

module.exports = { secureContainer, passesConditions };
