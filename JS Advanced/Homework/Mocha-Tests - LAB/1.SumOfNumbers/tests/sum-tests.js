let sum = require('../sum').sum;
let expect = require('chai').expect;


describe("sum(arr)", function () {
    it("should return 3 for [1,2]", function () {
        expect(sum([1,2])).equal(3)
    });

    it("should return 0 for []", function () {
        expect(sum([])).equal(0)
    });

    it("should return 1 for [1]", function () {
        expect(sum([1])).equal(1);
    });
});