const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const negData = require('../../data/negativeData.json');

describe('Inputs', function () {

    it('TC - 021 input field name does not accepts spaces', function () {
        browser.url('');
        $(sel.name).setValue(negData.name021);
        $(sel.name).getValue();
        const showVal = $(sel.nameRequired).isDisplayed();
        browser.pause(1000);
        expect(showVal).toEqual(true);
    });

    it('TC - 022 input field name shows an error when put 71 symbols', function () {
        browser.url('');
        $(sel.name).setValue(negData.name022);
        $(sel.name).getValue();
        const showVal = $(sel.nameError).isDisplayed();
        browser.pause(1000);
        expect(showVal).toEqual(true);
    });

    it('TC-023 skip gender and create button is not clickable', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        $(sel.storyClick).click();
        $$(sel.storyType)[data.storyType.Comedy].click();
        const create = $(sel.create).isClickable();
        browser.pause(2000);
        expect(create).toEqual(false);
    });

    it('TC-024 skip age and button create is not clickable', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.name).getValue();
        $$(sel.gender)[data.gender.he].click();
        $(sel.storyClick).click();
        $$(sel.storyType)[data.storyType.Comedy].click();
        const create = $(sel.create).isEnabled();
        expect(create).toEqual(false);
    });


    it('TC - 050 input field age does not accepts letters', function () {
        browser.url('');
        $(sel.age).setValue(negData.age050);
        $(sel.age).getValue();
        const showEr = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(showEr).toEqual(true);
    });

    it('TC - 051 input field age does not accepts more than 13 numbers', function () {
        browser.url('');
        $(sel.age).setValue(negData.age051);
        $(sel.age).getValue();
        const showEr = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(showEr).toEqual(true);
    });

    it('TC-084 Create button is not clickable after 1 input field are filled in', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.name).getValue()
        const create = $(sel.create).isEnabled();
        browser.pause(1000);
        expect(create).toEqual(false);
    });

    it('TC-085 Create button is not clickable after 1 and 2 input fields are filled in', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.name).getValue();
        $$(sel.gender)[data.gender.she].click();
        const create = $(sel.create).isEnabled();
        browser.pause(1000);
        expect(create).toEqual(false);
    });

    it('TC-086 Create button is clickable after 1-3 are filled in', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.name).getValue();
        $$(sel.gender)[data.gender.he].click();
        $(sel.age).setValue(data.age);
        const create = $(sel.create).isEnabled();
        browser.pause(1000);
        expect(create).toEqual(false);
    });

    it('TC - 042 input field age does not accepts only number 0', function () {
        browser.url('');
        $(sel.age).setValue(negData.age042);
        $(sel.age).getValue();
        const value = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(value).toEqual(true);
    });

    it('TC - 043 input field age does not accepts first number 0', function () {
        browser.url('');
        $(sel.age).setValue(negData.age043);
        $(sel.age).getValue();
        const value = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(value).toEqual(false);
    });

    it('TC - 044 input field age does not accepts negative numbers', function () {
        browser.url('');
        $(sel.age).setValue(negData.age044);
        $(sel.age).getValue();
        const showEr = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(showEr).toEqual(true);
    });

    it('TC - 045 input field age does not accepts symbols', function () {
        browser.url('');
        $(sel.age).setValue(negData.age045);
        $(sel.age).getValue();
        const value = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(value).toEqual(true);
    });

    it('TC - 047 input field age does not accepts combination integer numbers with space', function () {
        browser.url('');
        $(sel.age).setValue(negData.age047);
        $(sel.age).getValue();
        const value = $(sel.ageUnreal).isDisplayed();
        browser.pause(1000);
        expect(value).toEqual(true);
    });

    it('TC - 048 input field age does not accepts decimals', function () {
        browser.url('');
        $(sel.age).setValue(negData.age048);
        $(sel.age).getValue();
        const result = $(sel.ageUnreal).isDisplayed();
        browser.pause(2000);
        expect(result).toEqual(true);
    });
});