let createList = require('../script').createList;
let expect = require('chai').expect;

describe("createList", function () {
    let myList;
    beforeEach(function () {
        myList = createList();
    });

    describe("add()", function () {
        it("add parameter", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            expect(myList.toString()).to.equal('1, two, 3');
        });
    });
    describe("shiftLeft()", function () {
        it("shift left all elements with valid length", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('two, 3, 1');
        });
        it("shift left all elements with valid length", function () {
            myList.add(1);
            myList.add(2);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('2, 1');
        });
        it("shift left all elements with valid length", function () {
            myList.add(1);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('1');
        });
        it("shift left all elements with invalid length", function () {
            myList.shiftLeft();
            expect(myList.toString()).to.equal('');
        });
    });
    describe("shiftRight()", function () {
        it("shift right all elements with valid length", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.add('four');
            myList.shiftRight();
            expect(myList.toString()).to.equal('four, 1, two, 3');
        });
        it("shift right all elements with valid length", function () {
            myList.add(1);
            myList.add(2);
            myList.shiftRight();
            expect(myList.toString()).to.equal('2, 1');
        });
        it("shift right all elements with valid length", function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.shiftRight();
            expect(myList.toString()).to.equal('3, 1, 2');
        });
        it("shift right all elements with invalid length", function () {
            myList.add(1);
            myList.shiftRight();
            expect(myList.toString()).to.equal('1');
        });
        it("shift right all elements with invalid length", function () {
            myList.shiftRight();
            expect(myList.toString()).to.equal('');
        });
    });
    describe("swap()", function () {
        it("swaps the items at the specified indexes and returns true", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.add('four');
            expect(myList.swap(0, 3)).to.equal(true);
            expect(myList.toString()).to.equal('four, two, 3, 1');
        });
        it("swaps the items at the specified indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.add('four');
            expect(myList.swap(0, 6)).to.equal(false);
            expect(myList.toString()).to.equal('1, two, 3, four');
        });
        it("swaps the items at the specified indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.add('four');
            expect(myList.swap(1, 1)).to.equal(false);
            expect(myList.toString()).to.equal('1, two, 3, four');
        });
        it("swaps the items at the specified indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.add('four');
            expect(myList.swap(-1, 1)).to.equal(false);
            expect(myList.toString()).to.equal('1, two, 3, four');
        });
        it("swaps the items at the specified indexes and returns true", function () {
            myList.add(1);
            myList.add('two');
            expect(myList.swap(0, 1)).to.equal(true);
            expect(myList.toString()).to.equal('two, 1');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            expect(myList.swap(0, 1)).to.equal(false);
            expect(myList.toString()).to.equal('1');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            expect(myList.swap('pol', 1)).to.equal(false);
            expect(myList.toString()).to.equal('');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            expect(myList.swap('pol', 'kjfr')).to.equal(false);
            expect(myList.toString()).to.equal('');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            expect(myList.swap(1, 'pol')).to.equal(false);
            expect(myList.toString()).to.equal('');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            expect(myList.swap(0, 1)).to.equal(false);
            expect(myList.toString()).to.equal('');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            expect(myList.swap(12, 1)).to.equal(false);
            expect(myList.toString()).to.equal('1, two');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            expect(myList.swap(1, -1)).to.equal(false);
            expect(myList.toString()).to.equal('1, two');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            expect(myList.swap(-1, -1)).to.equal(false);
            expect(myList.toString()).to.equal('1, two');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            expect(myList.swap(1.5, 0)).to.equal(false);
            expect(myList.toString()).to.equal('1, two');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            expect(myList.swap(1, 2)).to.equal(false);
            expect(myList.toString()).to.equal('1, two');
        });
        it("swaps the items with invalid indexes and returns false", function () {
            myList.add(1);
            myList.add('two');
            myList.add(3);
            myList.add(4);
            expect(myList.swap(3, 1)).to.equal(true);
            expect(myList.toString()).to.equal('1, 4, 3, two');
        });
    });
});

