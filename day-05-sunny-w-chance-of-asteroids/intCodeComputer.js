const intCodeComputer = (program, inputMap) => {

    let instructionCount = 0;
    let instructionModes = [0, 0, 0];
    let thrusterSignal;

    while (instructionCount < program.length) {
        let instruction = program[instructionCount];
        if (instruction === 3) {
            program[program[instructionCount + 1]] = inputMap[0];
            inputMap.splice(0,1);
            instructionCount += 2;
        } else if (instruction === 99) {
            console.log(
                "====================================================================="
            );
            console.log("Done");
            console.log(
                "====================================================================="
            );
            break;
        } else {
            let opcode = instruction % 100;
            instruction = Math.floor(instruction / 100);
            instructionModes[0] = instruction % 10;
            instruction = Math.floor(instruction / 10);
            instructionModes[1] = instruction % 10;
            instruction = Math.floor(instruction / 10);
            instructionModes[2] = instruction % 10;
            switch (opcode) {
                case 1:
                    program[program[instructionCount + 3]] = findParam(1) + findParam(2);
                    instructionCount += 4;
                    break;
                case 2:
                    program[program[instructionCount + 3]] = findParam(1) * findParam(2);
                    instructionCount += 4;
                    break;
                case 4:
                    thrusterSignal = findParam(1);
                    console.log(thrusterSignal);
                    instructionCount += 2;
                    break;
                case 5:
                    if (findParam(1) !== 0) {
                        instructionCount = findParam(2);
                    } else {
                        instructionCount += 3;
                    }
                    break;
                case 6:
                    if (findParam(1) === 0) {
                        instructionCount = findParam(2);
                    } else {
                        instructionCount += 3;
                    }
                    break;
                case 7:
                    program[program[instructionCount + 3]] =
                        findParam(1) < findParam(2) ? 1 : 0;
                    instructionCount += 4;
                    break;
                case 8:
                    program[program[instructionCount + 3]] =
                        findParam(1) === findParam(2) ? 1 : 0;
                    instructionCount += 4;
                    break;
            }
        }
    }

    function findParam(index) {
        return instructionModes[index - 1] == 0
            ? program[program[instructionCount + index]]
            : program[instructionCount + index];
    }

    return thrusterSignal;
};

module.exports = intCodeComputer;