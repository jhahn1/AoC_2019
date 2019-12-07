const sunnyAsteroids = instructions => {
    const input = 1;
    let program = instructions.split(',').map(x => x.trim());
    let instructionCount = 0;

    for(let i=0; i<program.length; i+instructionCount) {
        const instruction = parseInt(program[i]);
        if(instruction === 3) {
            instructionCount = 2;
            program[program[i+1]] = input;
        } else if (instruction === 4) {
            instructionCount = 2;
            console.log(program[i+1]);
        } else if (instruction === 99) {
            console.log('Final program = ', program);
            return;
        }
        else {
            instructionCount = opCode.length -1;
            let opCode = parseInt(instruction.substring(instruction.length, instruction.length -2));
            let instructionsSplit = instruction.split('');
            let total;
            for(let i = 0; i<instructionsSplit.length-2; i++) {
                const parameter = instructionsSplit[instructionsSplit.length - (2 + i)];
                const value = parameter === 0 ? program[program[i + 1]] : program[i + 1];
                if (total) {
                    total = opCode === 2 ? total * value : total + value;
                }
            }
        }
    }
};

module.exports = sunnyAsteroids;