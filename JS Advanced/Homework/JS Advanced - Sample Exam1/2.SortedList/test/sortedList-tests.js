let SortedList = require("../sortedList").SortedList;
let expect = require('chai').expect;

describe("SortedList", function () {
    let myList = {};
    beforeEach(function() {
        myList = new SortedList();
    });
    it("constructor should be function", function () {
        expect(typeof SortedList).equal('function');
        expect(SortedList.prototype.hasOwnProperty('add')).equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).equal(true);
    });
    describe("add()", function () {
        it("should return 2 after {add(1),add(2)}", function () {
            myList.add(1);
            myList.add(2);
            expect(myList.size).equal(2)
        });
    });
    describe("sort ascending all times", function () {
        it("should be sorted", function () {
            myList.add(1);
            myList.add(3);
            myList.add(10);
            myList.add(4);
            myList.add(7);
            expect(myList.get(4)).to.equal(10);
            expect(myList.get(0)).to.equal(1);
            expect(myList.get(2)).to.equal(4);
        });
    });
    describe("remove() and get()", function () {
        it("should return 1 after {add(1),add(2),remove(1)}", function () {
            myList.add(1);
            myList.add(2);
            myList.remove(1);
            expect(myList.size).equal(1);
            expect(myList.get(0)).equal(1);
        });
        it("should return 2 after {add(1),add(2),get(1)}", function () {
            myList.add(1);
            myList.add(2);
            expect(myList.get(1)).equal(2)
        });
        it("should return Error after {get(-2)}", function () {
            myList.add(1);
            myList.add(2);
            expect(() => myList.get(-2)).to.throw(Error);
        });
        it("should return Error after {remove(-2)}", function () {
            myList.add(1);
            myList.add(2);
            expect(() => myList.remove(-2)).to.throw(Error);
        });
        it("should return Error after {remove(42)}", function () {
            myList.add(1);
            myList.add(2);
            expect(() => myList.remove(42)).to.throw(Error);
        });
        it("should return Error after {get(42)}", function () {
            myList.add(1);
            myList.add(2);
            expect(() => myList.get(42)).to.throw(Error);
        });
        it("should return Error after {remove(-2)}", function () {
            expect(() => myList.get(-2)).to.throw(Error);
        });
        it("should not work with empty collection", function () {
            expect(() => myList.get(0)).to.throw(Error);
            expect(() => myList.remove(0)).to.throw(Error);
        });
    });
    describe("size()", function () {
        it("should have size property", function () {
            expect(myList.size).equal(0)
        });
    });
});