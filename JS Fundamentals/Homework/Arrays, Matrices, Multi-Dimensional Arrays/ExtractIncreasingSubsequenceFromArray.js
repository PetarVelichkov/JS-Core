function extractSequence(input) {
    input = input.map(Number);
    let result = [input[0]];
    let biggestNum = input[0];
    for (let i = 0; i < input.length - 1; i++) {
        let current = input[i];
        let nextNum = input[i + 1];
        if (current <= nextNum && nextNum >= biggestNum) {
            biggestNum = nextNum;
            result.push(nextNum);
        }
    }
    console.log(result.join('\n'));
}
extractSequence([ '20', '3', '15', '6' ]);