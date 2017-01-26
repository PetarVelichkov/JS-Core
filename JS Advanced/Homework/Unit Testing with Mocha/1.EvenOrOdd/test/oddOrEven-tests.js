let isOddOrEven = require("../oddOrEven").isOddOrEven;
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("isOddOrEven()", function () {
    it("should return undefined for 13", function () {
        let value = isOddOrEven(13);
        expect(value).equal(undefined);
    });

    it("should return undefined for {pesho: 'gosho'}", function () {
        let value = isOddOrEven({name: "gosho"});
        expect(value).equal(undefined);
    });

    it("should return even for 'pesh'", function () {
        let value = isOddOrEven('pesh');
        expect(value).equal("even");
    });

    it("should return odd for 'pesho'", function () {
        assert.equal(isOddOrEven("pesho"), "odd");
    });

    it("should return even for ''", function () {
        let value = isOddOrEven('');
        expect(value).equal("even");
    });
});