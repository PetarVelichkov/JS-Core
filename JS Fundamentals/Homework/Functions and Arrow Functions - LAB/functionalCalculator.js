function functionalCalculator([num1, num2, oper]) {
    num1 = Number(num1);
    num2 = Number(num2);

    return calculate(num1, num2, oper);

    function calculate(num1, num2, oper) {
        switch (oper){
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num1 / num2;
        }
    }
}
console.log(functionalCalculator(['4', '4', '+']));
