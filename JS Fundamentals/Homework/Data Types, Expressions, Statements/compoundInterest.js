function solve([principal, rate, period, time]) {
    [principal, rate, period, time] = [principal, rate, period, time].map(Number);
    rate = rate / 100;
    let frequency = 12 / period;
    let total = principal * Math.pow((1 + rate / frequency), frequency * time);

    console.log(total.toFixed(2));
}

solve([100000, 5, 12, 25]);