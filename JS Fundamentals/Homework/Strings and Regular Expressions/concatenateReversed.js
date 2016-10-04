function concatenateReversed(input) {
    // let result = '';
    // for (let i = input.length - 1; i >= 0 ; i--) {
    //     let elem = reverse(input[i]);
    //     result += elem;
    // }
    // console.log(result);
    // function reverse(s) {
    //     return s.split('').reverse().join('');
    // }
    let allStrings = input.join('');
    let chars = Array.from(allStrings).reverse();
    console.log(chars.join(''));
}
concatenateReversed(['I', 'am', 'student']);