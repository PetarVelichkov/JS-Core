function solve([a, b]) {
    [a, b] = [a, b].map(Number);
    let area = a * b;
    let perimeter = 2 * a + 2 * b;
    console.log(area);
    console.log(perimeter);
}
solve([2, 2]);
