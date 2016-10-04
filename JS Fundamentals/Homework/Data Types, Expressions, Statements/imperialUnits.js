function solve([num]) {
    num = Number(num);
    let inches = num % 12;
    let foot = Math.floor(num / 12);
    console.log(`${foot}\' -${inches}\"`);
}
solve([11]);