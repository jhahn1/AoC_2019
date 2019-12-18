const intCodeComputer = require("../day-05-sunny-w-chance-of-asteroids/intCodeComputer");
const _ = require("lodash");

const amplificationCircuitPart1 = (input, phaseSettingSequence) => {
  const allPhaseSettingSequences = phaseSettingSequence
    ? [phaseSettingSequence.join("")]
    : generateAllPermutationsOfPhaseSettingSequences();
  let maxThrusterSignal = 0;

  _.forEach(allPhaseSettingSequences, function(pss) {
    let inputInstruction = 0;
    let phaseSettingSequence = pss.split("");
    for (let i = 0; i < phaseSettingSequence.length; i++) {
      let currentThrusterSignal = intCodeComputer(input, [
        parseInt(phaseSettingSequence[i]),
        inputInstruction
      ]);
      inputInstruction = currentThrusterSignal;
    }
    if (inputInstruction > maxThrusterSignal) {
      maxThrusterSignal = inputInstruction;
      console.log("Current max = ", maxThrusterSignal);
    }
  });
  return maxThrusterSignal;
};

function generateAllPermutationsOfPhaseSettingSequences() {
  let originalPhaseSettingSequence = [0, 1, 2, 3, 4];
  let results = [[originalPhaseSettingSequence.shift()]];

  while (originalPhaseSettingSequence.length) {
    const currentSequence = originalPhaseSettingSequence.shift();
    let tempResults = [];
    results.forEach(result => {
      let index = 0;
      while (index <= results.length) {
        const temp = [...result];
        temp.splice(index, 0, currentSequence);
        tempResults.push(temp);
        index++;
      }
    });
    results = tempResults;
  }
  return results
    .map(letterArray => letterArray.join(""))
    .filter((el, idx, self) => self.indexOf(el) === idx);
}

module.exports = amplificationCircuitPart1;
