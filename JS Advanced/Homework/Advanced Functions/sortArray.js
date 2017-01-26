function sortArray(inputArray, method) {
    let sorting = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };
    return inputArray.sort(sorting[method]);
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
