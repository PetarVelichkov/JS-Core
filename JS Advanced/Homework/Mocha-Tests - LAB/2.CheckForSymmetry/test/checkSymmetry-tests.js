let isSymmetric = require('../checkSymmetry').isSymmetric;
let expect = require('chai').expect;

describe('isSymmetric(arr)', function () {
    it('should return true for [1]', function () {
       expect(isSymmetric([1])).equal(true)
    });

    it('should return true for []', function () {
        expect(isSymmetric([])).equal(true)
    });

    it('should return false for not array', function () {
        expect(isSymmetric(1,2,3)).equal(false)
    });

    it('should return true for [1,2,1]', function () {
        expect(isSymmetric([1,2,1])).equal(true)
    });

    it('should return false for [1,2,3,4,2,1]', function () {
        expect(isSymmetric([1,2,3,4,2,1])).equal(false)
    });

    it('should return false on isSymmetric([10,20,30,10])', () => {
        expect(isSymmetric([10, 20, 30, 10])).to.be.equal(false);
    });

    it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(isSymmetric(["pesho", new Date(2016, 8, 14), false, new Date(2016, 8, 15), "pesho"])).to.be.equal(true);
    });
});