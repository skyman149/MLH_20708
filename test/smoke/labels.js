const sel = require ('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001.1 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Labels exist', function () {

        it('TC-007 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-025 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-030 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-056 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });
        // moved from myTestImage.js
        it('TC-062 Label for Image', function () {
            const label = $$(sel.label)[4].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {

        it('TC-008 Label for name = 1. What is your Hero\'s name?', function () {
            const text = $$(sel.label)[0].getText('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-029 Label for gender = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-031 Label for age =  3. How old is your Hero?', function () {
            const text = $$(sel.label)[2].getText('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-057 Label for story  = 4. What type of story would you like to read?', function () {
            const text = $$(sel.label)[3].getText('title');
            expect(text).toEqual(exp.labelStory);

        });
        // moved from myTestImage.js
        it('TC-063 Label for picture  = 5. Upload an image (optional)', function () {
            const text = $(sel.labelImg).getText('title');
            expect(text).toEqual(exp.labelImage);
        });
        // moved from myTestImage.js
        it('TC-063 Label for Image = 5. Upload an image (optional).', function () {
            const text = $$(sel.label)[4].getAttribute('textContent');
            expect(text).toEqual(exp.labelImage);
        });

    });

    describe('The header and text under the header are present and correct ', function () {


        it('TC-001 The header is present', function () {
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-002 The header is correct = My Little Hero', function () {
            const text = $(sel.header).getText();
            expect(text).toEqual(exp.header);
        });
        it('TC-003 The text under header is present', function () {
            const header = $(sel.text).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-004 The text is correct = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const text = $(sel.text).getText();
            expect(text).toEqual(exp.text);
        });


    });


});

