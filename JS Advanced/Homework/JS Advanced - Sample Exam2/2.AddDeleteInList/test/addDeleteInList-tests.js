let list = require('../addDeleteInList').list;
let expect = require('chai').expect;

describe("list", function () {
    //Kogato imame IIFE slagame beforeEach i mahame ifito za lokalno testvane
    // let list;
    // beforeEach(function () {
    //     list = produce();
    // });
    it("empty list", function () {
        expect(list.toString()).equal('')
    });
    it("add 1", function () {
        list.add(1);
        expect(list.toString()).equal('1')
    });
    it("add items to list", function () {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.toString()).equal('1, two, 3')
    });
    it("delete item from list and return this item", function () {
        list.add(1);
        list.add('two');
        list.add(3);
        expect(list.delete(1)).equal('two');
        expect(list.toString()).equal('1, 3');
    });
    it("cannot delete item from list and return undefined", function () {
        list.add(14);
        expect(list.toString()).to.equal('14');
        expect(list.delete(20)).equal(undefined)
    });
    it("cannot delete item from list and return undefined", function () {
        expect(list.delete(-1)).equal(undefined);
    });
    it("cannot delete item from list and return undefined", function () {
        expect(list.delete(3.15)).equal(undefined);
    });
});
