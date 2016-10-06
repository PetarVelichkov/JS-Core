function rotateArray(input) {
    let n = Number(input[input.length - 1]);
    input.pop();
    let len = input.length;
    for (let i = 0; i < n % (1000 * len); i++) {
        let lastElem = input.pop();
        input.unshift(lastElem);
    }
    console.log(input.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);
