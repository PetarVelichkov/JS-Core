function uniqueSequences(input) {
    let unique = new Set();
    for (let array of input) {
        let current = JSON.parse(array).map(Number).sort((a,b) => b - a);
        current = JSON.stringify(current);
        unique.add(current)
    }
    let sorted = Array.from(unique).sort(compare);
    sorted.forEach(a => console.log(`[${JSON.parse(a).join(', ')}]`));

    function compare(a, b) {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
    }
}
uniqueSequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
