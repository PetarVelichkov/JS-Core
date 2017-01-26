let lookupChar = require("../charLookup").lookupChar;
let expect = require("chai").expect;

describe("isOddOrEven()", function () {
    it("should return undefined for 13 and 0", function () {
        let value = lookupChar(13, 0);
        expect(value).equal(undefined);
    });

    it("should return undefined for 'pesho' and 'gosho'", function () {
        let value = lookupChar('pesho', 'gosho');
        expect(value).equal(undefined);
    });

    it("should return Incorrect index for 'pesho' and 10", function () {
        let value = lookupChar('pesho', 10);
        expect(value).equal('Incorrect index');
    });

    it("should return undefined for 'pesho' and 5.2", function () {
        let value = lookupChar('pesho', 5.2);
        expect(value).equal(undefined);
    });

    it("should return undefined for 'pesho' and -5", function () {
        let value = lookupChar('pesho', -5);
        expect(value).equal('Incorrect index');
    });

    it("should return 'h' for 'pesho' and 3", function () {
        let value = lookupChar('pesho', 3);
        expect(value).equal('h');
    });
});
