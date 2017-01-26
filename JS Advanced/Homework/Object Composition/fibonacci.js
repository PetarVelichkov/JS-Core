function fibonacci(n) {
    let fib = (function() {
        let f0 = 0, f1 = 1;
        return () => {
            let oldf0 = f0;
            let oldf1 = f1;
            f0 = oldf1;
            f1 = oldf0 + oldf1;
            return f0;
        }
    }());
    let fibNumbers = [];
    for (let i = 0; i < n; i++) {
        fibNumbers.push(fib())
    }
    return fibNumbers;
}
console.log(fibonacci(15));
