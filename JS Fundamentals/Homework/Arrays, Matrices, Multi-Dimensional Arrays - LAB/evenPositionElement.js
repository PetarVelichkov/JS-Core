function evenPosition(input) {
    let result = [];
    for (let i = 0; i < input.length; i += 2) {
        result.push(input[i]);
    }
    console.log(result.join(' '));
}
evenPosition(['20', '30', '40']);
/*
* function evenPositions(arr) {
 let result = [];
 for (let i in arr)
 if (i % 2 == 0)
 result.push(arr[i]);
 return result.join(' ');
 }
 */