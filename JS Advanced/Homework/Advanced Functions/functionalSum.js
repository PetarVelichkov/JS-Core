let add = (function() {
    let total = 0;
    return function sum(a) {
        total += a;
        sum.toString = function () {
            return total;
        };
        return sum;
    }
}());
console.log(add(5)(5));
