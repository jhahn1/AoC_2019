const _ = require("lodash");

const programAlarm = input => {

  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {

      const opCodes = input
          .split(",")
          .map(x => x.trim())
          .map(x => parseInt(x));
      opCodes[1] = noun;
      opCodes[2] = verb;

      for (let i = 0; i < opCodes.length-4; i += 4) {
        let code = opCodes[i];
        let firstIndex = opCodes[i + 1];
        let secondIndex = opCodes[i + 2];
        let replaceIndex = opCodes[i + 3];
        let replacement;

        if (code === 99) {
          if(opCodes[0]===19690720){
            console.log(`Noun = ${noun} Verb = ${verb}`);
            const answer = (100*noun) + verb;
            return answer;
          } else {
            console.log("Trying again...");
          }
        } else if (code === 1) {
          replacement = opCodes[firstIndex] + opCodes[secondIndex];
        } else if (code === 2) {
          replacement = opCodes[firstIndex] * opCodes[secondIndex];
        } else {
          console.error("Error: OpsCode = ", code);
        }

        opCodes[replaceIndex] = replacement;
      }
    }
  }
};

module.exports = programAlarm;
