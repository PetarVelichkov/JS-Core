let sharedObject = require('../sharedObject').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
            <input type="text" id="name">
            <input type="text" id="income">
        </div>`;

describe('sharedObject', function () {
    it("name property should start with null", function () {
        expect(sharedObject.name).equal(null)
    });
    it("income property should start with null", function () {
            expect(sharedObject.income).equal(null)
    });
    describe('changeName', function () {
        it("with invalid parameter, should not change name property", function () {
            sharedObject.changeName('');
            expect(sharedObject.name).equal(null, 'Name changed incorrectly!')
        });
        it("with invalid parameter, should not change name property", function () {
            sharedObject.name = 'gosho';
            sharedObject.changeName('');
            expect(sharedObject.name).equal('gosho', 'Name changed incorrectly!')
        });
        it("with invalid parameter, should not change name property", function () {
            let nameTextBox = $('#name');
            nameTextBox.val('Ivan');
            sharedObject.changeName('');
            expect(nameTextBox.val()).equal('Ivan', 'Name changed incorrectly!')
        });
        it("with valid parameter, should change name property", function () {
            sharedObject.changeName('joro');
            expect(sharedObject.name).equal('joro', 'Name did not changed!')
        });
        it("with valid parameter, should change name property", function () {
            sharedObject.changeName('pesho');
            let nameTextBox = $('#name');
            expect(nameTextBox.val()).equal('pesho', 'Name did not changed!')
        });
    });
    describe('changeIncome', function () {
        it("with invalid parameter, should not change income property", function () {
            sharedObject.income = 130;
            sharedObject.changeIncome({name: 'pesho'});
            expect(sharedObject.income).equal(130, 'Income changed incorrectly!')
        });
        it("with invalid parameter, should not change income property", function () {
            sharedObject.income = 12;
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).equal(12, 'Income changed incorrectly!')
        });
        it("with invalid parameter, should not change income property", function () {
            sharedObject.income = 1;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).equal(1, 'Income changed incorrectly!')
        });
        it("with invalid parameter, should not change income property", function () {
            sharedObject.income = 10;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).equal(10, 'Income changed incorrectly!')
        });
        it("with invalid parameter, should not change income property", function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val(10);
            sharedObject.changeIncome(-3);
            expect(incomeTextBox.val()).equal('10', 'Income changed incorrectly!')
        });
        it("with valid parameter, should change income property", function () {
            sharedObject.changeIncome(10);
            expect(sharedObject.income).equal(10, 'Income did not changed!')
        });
        it("with valid parameter, should  change income property", function () {
            sharedObject.changeIncome(10);
            let incomeTextBox = $('#income');
            expect(incomeTextBox.val()).equal('10', 'Income did not changed!')
        });
    });
    describe('updateName', function () {
        it("with invalid parameter, should not change name property", function () {
            sharedObject.name = 'gosho';
            let nameTextBox = $('#name');
            nameTextBox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).equal('gosho', 'Name changed incorrectly!')
        });
        it("with valid parameter, should change name property", function () {
            let nameTextBox = $('#name');
            nameTextBox.val('vera');
            sharedObject.updateName();
            expect(sharedObject.name).equal('vera', 'Name did not changed!')
        });
    });
    describe('updateIncome', function () {
        it("with invalid parameter, should not change name property", function () {
            sharedObject.income = 123;
            let nameTextBox = $('#income');
            nameTextBox.val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(123, 'Name changed incorrectly!')
        });
        it("with valid parameter, should change name property", function () {
            let nameTextBox = $('#income');
            nameTextBox.val(10);
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(10, 'Name changed incorrectly!')
        });
    });
});
