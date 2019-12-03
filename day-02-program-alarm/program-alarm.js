const programAlarm = input => {
  const opCodes = input
    .split(",")
    .map(x => x.trim())
    .map(x => parseInt(x));

  for (let i = 0; i < opCodes.length; i += 4) {
    let code = opCodes[i];
    let firstIndex = opCodes[i + 1];
    let secondIndex = opCodes[i + 2];
    let replaceIndex = opCodes[i + 3];
    let replacement;

    if (code === 99) {
      return opCodes;
    } else if (code === 1) {
      replacement = opCodes[firstIndex] + opCodes[secondIndex];
    } else if (code === 2) {
      replacement = opCodes[firstIndex] * opCodes[secondIndex];
    } else {
      console.error("Error: OpsCode = ", code);
    }

    opCodes[replaceIndex] = replacement;
  }
};

module.exports = programAlarm;
