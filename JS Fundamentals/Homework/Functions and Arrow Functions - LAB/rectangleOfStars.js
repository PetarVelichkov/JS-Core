function rectangleOfStars([n]) {
    n = Number(n);
    for (let row = 1; row <= n; row++) {
        printStars();  //or n inside function
    }
    function printStars(count = n) {
        console.log('*' + '*'.repeat(count - 1));
    }
}
rectangleOfStars(['4']);
