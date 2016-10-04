function modifyAverage([number]) {
    let count, digit, sum;
    while (true) {
        sum = 0;
        count = 0;
        for (let i = 0; i < number.length; i++) {
            digit = Number(number.charAt(i));
            sum += digit;
            count++;
        }
        if ((sum / count) > 5) {
            console.log(number);
            return;
        } else {
            number = number.concat('9');
        }
    }
}
modifyAverage(['101']);