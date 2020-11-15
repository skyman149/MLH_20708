const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js');

describe('Create button', function () {

    it('TC-083 Create button is disabled when you open the application', function () {
        browser.url('');
        const create = $(sel.create).isEnabled();
        expect(create).toEqual(false);
    });


    it('TC-087 Create button is active after 1-4 are filled in', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
        const create = $(sel.create).isEnabled();
        expect(create).toEqual(true);
    });


    it('TC-093 After submit button is clicked the story is present on the same page', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(3000);
        const text = $(sel.storyToRead).isDisplayed()
        expect(text).toEqual(true);
    });

});