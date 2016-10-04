function figure([n]) {
    let lineNumber = Number(n);
    n = Number(n);
    if (n == 2) {
        console.log('+++');
        return;
    }
    if (n % 2 == 0) {
        lineNumber--;
    }
    let middleLine = Math.ceil(n / 2);
    let repDash = '-'.repeat(n - 2);
    let repSpace = ' '.repeat(n - 2);

    for (let i = 1; i <= lineNumber; i++) {
        if (i == 1 || i == middleLine || i == lineNumber) {
            console.log('+' + repDash + '+' + repDash + '+');
        } else {
            console.log('|' + repSpace + '|' + repSpace + '|');
        }
    }
}
figure(['3']);