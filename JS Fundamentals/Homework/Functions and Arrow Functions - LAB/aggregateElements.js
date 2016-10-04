function aggregateElements(input) {
    input = input.map(Number);
    console.log(sum(input));
    console.log(inverseSum(input));
    console.log(concat(input));

    function sum(input) {
        let result = 0;
        for (let i = 0; i < input.length; i++) {
            result += input[i];
        }
        return result;
    }
    function inverseSum(input) {
        let result = 0;
        for (let i = 0; i < input.length; i++) {
            result += 1 / input[i];
        }
        return result;
    }
    function concat(input) {
        let result = '';
        for (let i = 0; i < input.length; i++) {
            result += input[i];
        }
        return result;
    }
}
aggregateElements(['2', '4', '8', '16']);