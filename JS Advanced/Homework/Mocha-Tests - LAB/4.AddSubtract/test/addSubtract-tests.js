let createCalculator = require('../addSubtract').createCalculator;
let expect = require('chai').expect;

describe('rgbToHexColor(arr)', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('should return 2 after {add(1),add(2)}', function () {
        calc.add(1); calc.add(1); let value = calc.get();
        expect(value).equal(2)
    });

    it('should return 1 after {calc.add(1); calc.add(1); calc.subtract(1)}', function () {
        calc.add(1); calc.add(1); calc.subtract(1);
        let value = calc.get();
        expect(value).equal(1)
    });

    it('should return -2 after {calc.subtract(1); calc.subtract(1)}', function () {
        calc.subtract(1); calc.subtract(1);
        let value = calc.get();
        expect(value).equal(-2)
    });

    it('should return 0 after {}', function () {
        let value = calc.get();
        expect(value).equal(0)
    });

    it('should return 4.1 after {calc.add(5.2),calc.subtract(1.1)}', function () {
        calc.add(5.2); calc.subtract(1.1);
        let value = calc.get();
        expect(value).equal(5.2 - 1.1)
    });

    it('should return 2 after {add(10),subtract("7"),add("-2"),subtract(-1)}', function () {
        calc.add(10); calc.subtract("7"); calc.add("-2"); calc.subtract(-1);
        let value = calc.get();
        expect(value).equal(2)
    });
});
