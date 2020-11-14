const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const findTextAge= require ('../../helpers/findTextAge.js');
const inputValues3 = require ('../../helpers/inputValues3.js');
const inputValues4 = require ('../../helpers/inputValues4.js');
const checkUpperCase = require ('../../helpers/checkUpperCase.js');
const inputValues5 = require('../../helpers/inputValues5.js');
const inputValues5Create = require('../../helpers/inputValues5Create.js');
const path = require('path');


describe('Checking the Story to Read', function () {


    it('TC-094 Verify that the Hero\'s name in the name of the story is the same Name' , function () {
        browser.url('');
        const inputName = $(sel.name).setValue("Anna");
        const name = $(sel.name).getValue();
        inputValues3( data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(3000);
        const story =$(sel.storyName).getText();
        const text = story.includes(name);
        expect(text).toEqual(true);
    });

    it('TC-095 Verify that the Hero\'s name in the story is the same Name' , function () {
        browser.url('');
        const inputName = $(sel.name).setValue("muffin man");
        const name = $(sel.name).getValue();
        inputValues3( data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(3000);
        const story =$(sel.storyToRead).getText();
        const text = story.includes(name);
        expect(text).toEqual(true);
    });

    it('TC-096 Verify that if Hero\'s name is written in lowercase it capitalized in story if the sentence starts with it' , function () {
        browser.url('');
        const inputName = $(sel.name).setValue("muffin man");
        inputValues3( data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(1000);
        const story =$(sel.storyToRead).getText();
        const res = checkUpperCase(story);
        expect(res).toEqual(true);

    });

    it('TC-097 Verify that the story has the image if it was uploaded', function () {
        browser.url('');
        inputValues5Create(data.name, data.gender.she, data.age, data.storyType.Comedy);
        const img = $(sel.uploadedImage).isDisplayed();
        expect(img).toEqual(true);
    });


    it('TC-098 Verify that the story has no image when the image was not uploaded', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
        const img = $(sel.uploadedImage).isDisplayed();
        expect(img).toEqual(false);
    });




    it('TC-102 Verify that Story page has "Try again" button', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(3000);
        const label = $(sel.tryAgain).isDisplayed()
        expect(label).toEqual(true);
    });


    it('TC-103  Verify that "Try again" button" is always active"', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(3000);
        const label = $(sel.tryAgain).isEnabled()
        expect(label).toEqual(true);
    });

    it('TC-104 Verify that the page is refreshing when the button "Try again!" is clicked' , function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        $(sel.create).click();
        browser.pause(3000);
        $(sel.tryAgain).click();
        const label = $(sel.create).isDisplayed();
        expect(label).toEqual(true);

    });


    it('TC-168 Verify that the age is shown in words', function () {
        browser.url('');
        for (let i = 0; i < data.checkAge.length; i++) {
            inputValues5(data.name, data.gender.she, data.checkAge[i], data.storyType.Comedy);
            $(sel.create).click();
            browser.pause(3000);
            let textAge = findTextAge();
            expect(textAge).toEqual(exp.arrayOfAgeWords[i]);
            $(sel.tryAgain).click();

        }
    });





});