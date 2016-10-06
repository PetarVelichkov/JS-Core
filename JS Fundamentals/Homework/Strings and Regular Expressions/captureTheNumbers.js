function captureNumbers(input) {
    let numbers = [];
    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let pattern = /[\d+]+/g;
        let match = pattern.exec(line);
        while (match) {
            numbers.push(match[0]);
            match = pattern.exec(line);
        }
    }
    console.log(numbers.join(' '));
}
captureNumbers([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);
/*function extractNumbers(input) {
 let nums = [];
 for (let line of input) {
 let res = line.match(/\d+/g);
 if(res) {
 nums = nums.concat(res);
 }
 }

 return nums.join(' ');
 }
 */