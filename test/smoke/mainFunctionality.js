const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');

describe('Checking main functionality', function () {

    describe('Happy path', function () {
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const clickCreate = $(sel.create).isEnabled();
            browser.pause(1000); // 1 sec pause
            expect(clickCreate).toEqual(true);
        });
    });

    describe('Other path', function () {
        it('TC-21.1 Create button is clickable after 1-5 are filled in', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Quest, data.imageFile.catNoir);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});

