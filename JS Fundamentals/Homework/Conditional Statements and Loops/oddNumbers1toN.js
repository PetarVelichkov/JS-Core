function oddNumber(input) {
    let number = Number(input[0]);
    for (let i = 1; i <= number; i += 2) {
        console.log(i);
    }
}
oddNumber([15]);