function sortArray(input) {
    // let result = input.sort(function (p1, p2) {
    //     if (p1.length != p2.length) {
    //         return p1.length - p2.length;
    //     } else {
    //         return p1.toLowerCase() > p2.toLowerCase();
    //     }
    // });
    let result = input.sort(((a, b) => {if(a.length != b.length) {return a.length - b.length}
        else {return a.toLowerCase() > b.toLowerCase()}
    }));
    console.log(result.join('\n'));
}
sortArray(['test',
    'Deny',
    'omen',
    'Default']);