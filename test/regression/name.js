const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const datName = require('../../data/nameData.json');

describe('Checking Name section', function () {
    it('TC-012 Verify that the input field accepts  letters A-Z,a-z', function () {
        browser.url('');
        $(sel.name).setValue(datName.name012);
        const value = $(sel.name).getValue();
        expect(value).toEqual(exp.name012);
    });
    it('TC-011 Verify that the input field accepts  digits 0 - 9', function (){
        browser.url('');
        $(sel.name).setValue(datName.name011);
        const value = $(sel.name).getValue();
        expect(value).toEqual(exp.name011);
    });
    it('TC-013 Verify that the input field accepts only special characters !@#$%^&*()_+":?><', function (){
        browser.url('');
        $(sel.name).setValue(datName.name013);
        const value = $(sel.name).getValue();
        expect(value).toEqual(exp.name013);
    });
    it('TC-016 Verify that the input fields accepts the name with length 35', function () {
        browser.url('');
        $(sel.name).setValue(datName.name016);
        const value = $(sel.name).getValue();
        expect(value).toEqual(exp.name016);
    });
    it('TC-017 Verify that the field doesn\'t accepts non-english letters', function () {
        browser.url('');
        $(sel.name).setValue(datName.name017);
        const value = $(sel.name).getValue();
        expect(value).toEqual("");
    });

});

