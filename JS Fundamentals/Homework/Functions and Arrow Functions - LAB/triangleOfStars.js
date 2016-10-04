// function triangleOfStars([n]) {
//     n = Number(n);
//     for (let i = 1; i <= n; i++) {
//         console.log('*'.repeat(i));
//     }
//     for (let i = n - 1; i > 0 ; i--) {
//         console.log('*'.repeat(i));
//     }
// }
// triangleOfStars(['5']);

function printTriangle(input) {
    function printStars(count) {
        console.log('*'.repeat(count));
    }
    for (let i = 1; i <= input; i++) {
        printStars(i)
    }
    for (let i = input - 1; i > 0; i--) {
        printStars(i)
    }
}
printTriangle([5]);