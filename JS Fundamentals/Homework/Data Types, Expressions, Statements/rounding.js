function solve([number, n]) {
    [number, n] = [number, n].map(Number);
    // if (n > 15) {
    //     n = 15;
    // }
    let precision = Math.pow(10, n);

    number = Math.round(number * precision) / precision;

    console.log(number);
}
solve([10.531122, 3]);
