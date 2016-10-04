function triangle(input) {
    let n = Number(input[0]);
    //let line = '';

    for (let i = 1; i <= n; i++) {
        console.log('$'.repeat(i));
        // console.log(new Array(i + 1).join('$'));
        // line += '$';
    }
}
triangle(['5']);