let mathEnforcer = require('../mathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe("mathEnforcer", function () {
    describe('addFive', function () {
        it("should return 10 for addFive(5)", function () {
            let value = mathEnforcer.addFive(5);
            expect(value).equal(10);
        });
        it("should return 0 for addFive(-5)", function () {
            let value = mathEnforcer.addFive(-5);
            expect(value).equal(0);
        });
        it("should return 10.05 for addFive(5.05)", function () {
            let value = mathEnforcer.addFive(5.05);
            expect(value).equal(5.05 + 5);
        });
        it("should return -0.05 for addFive(-5.05)", function () {
            let value = mathEnforcer.addFive(-5.05);
            expect(value).equal(-5.05 + 5);
        });
        it("should return undefined for addFive('pesho')", function () {
            let value = mathEnforcer.addFive('pesho');
            expect(value).equal(undefined);
        });
    });
    describe('subtractTen', function () {
        it("should return 0 for subtractTen(10)", function () {
            let value = mathEnforcer.subtractTen(10);
            expect(value).equal(0);
        });
        it("should return -15 for subtractTen(-5)", function () {
            let value = mathEnforcer.subtractTen(-5);
            expect(value).equal(-15);
        });
        it("should return 0.05 for subtractTen(5.05)", function () {
            let value = mathEnforcer.subtractTen(10.05);
            expect(value).equal(10.05 - 10);
        });
        it('should return -12.5 on subtractTen(-2.5)', () => {
            expect(mathEnforcer.subtractTen(-2.5)).to.equal(-2.5 - 10);
        });
        it("should return undefined for subtractTen('pesho')", function () {
            let value = mathEnforcer.subtractTen('pesho');
            expect(value).equal(undefined);
        });
    });
    describe('sum', function () {
        it("should return 10 for sum(5, 5)", function () {
            let value = mathEnforcer.sum(5, 5);
            expect(value).equal(10);
        });
        it("should return -10 for sum(-5, -5)", function () {
            let value = mathEnforcer.sum(-5, -5);
            expect(value).equal(-10);
        });
        it("should return 10.6 for sum(5.5, 5.1)", function () {
            let value = mathEnforcer.sum(5.5, 5.1);
            expect(value).equal(10.6);
        });
        it("should return undefined for sum(5, 'pesho')", function () {
            let value = mathEnforcer.sum(5, 'pesho');
            expect(value).equal(undefined);
        });
        it("should return undefined for sum('pesho', 5)", function () {
            let value = mathEnforcer.sum('pesho', 5);
            expect(value).equal(undefined);
        });
    });
});

