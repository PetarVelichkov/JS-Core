function quadratic([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);

    let disc = b * b - 4 * a * c;
    if (disc > 0) {
        disc = Math.sqrt(disc);
        let x1 = (-b + disc) / (2 * a);
        let x2 = (-b - disc) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (disc == 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log('No');
    }
}
quadratic(['5', '2', '1']);