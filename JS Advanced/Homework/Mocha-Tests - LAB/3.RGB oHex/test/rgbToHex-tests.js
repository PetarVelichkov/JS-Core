let rgbToHexColor = require('../rgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe('rgbToHexColor(arr)', function () {
    it('should return #FF9EAA for (255, 158, 170)', function () {
        expect(rgbToHexColor(255, 158, 170)).equal('#FF9EAA')
    });

    it('should return undefined for ()', function () {
        expect(rgbToHexColor()).equal(undefined)
    });

    it('should return undefined for (20)', function () {
        expect(rgbToHexColor(20)).equal(undefined)
    });

    it('should return undefined for (10,20)', function () {
        expect(rgbToHexColor(10, 20)).equal(undefined)
    });

    it('should return #0C0D0E for (12, 13, 14)', function () {
        expect(rgbToHexColor(12, 13, 14)).equal('#0C0D0E')
    });

    it('should return #000000 for(0, 0, 0) ', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it('should return #FFFFFF for(255, 255, 255) ', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('should return undefined for(256, 255, 255) ', () => {
        expect(rgbToHexColor(256, 255, 255)).to.be.equal(undefined);
    });

    it('should return undefined for(-1, 255, 255) ', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.be.equal(undefined);
    });
});