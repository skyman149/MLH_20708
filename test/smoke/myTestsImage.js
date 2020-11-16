const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const path = require('path');

describe('Image section', function () {

    describe('Verifying elements and names and positive test cases', function () {
//moved several test cases to inputs.js and labels.js
        it('TC-064.1 File input field has square shape', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const field = $(sel.fileInput);
            const width = field.getSize('width')
            const height = field.getSize('height')
            expect(width === height).toEqual(true);
        });

        it('TC-068 Verify that image upload is optional', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Rebirth);
            const clickCreate = $(sel.create).isEnabled();
            expect(clickCreate).toEqual(true);
        });

        it('TC-069 Verify that user can upload an JPEG(JPG) image', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Tragedy, data.imageFile.JPEG);
            $(sel.create).click();
            const img = $(sel.uploadedImage).isDisplayed();
            expect(img).toEqual(true); // true
        });

        it('TC-070 Verify that user can upload an PNG image', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType["Overcoming the Monster"], data.imageFile.PNG);
            $(sel.create).click();
            const img = $(sel.uploadedImage).isDisplayed();
            expect(img).toEqual(true); // true
        });

        it('TC-071 Verify that uploaded image is shown with max side = 500px', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType["Journey and Return"], data.imageFile.JPEG);
            $(sel.create).click();
            const img = $(sel.uploadedImage);
            const width = img.getSize('width')
            expect(width === exp.storyImageWidth).toEqual(true); // false
            // expect(width === 200).toEqual(true); // true
        });

        it('TC-072 Verify that "bin" icon is present in File input field', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy, data.imageFile["2MB"]);
            //browser.elementHover(sel.uploadedImage);
            const binIcon = $(sel.bin).isDisplayed();
            expect(binIcon).toEqual(true);
        });

        it('TC-073 Verify that user is able to delete uploaded image', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Tragedy, data.imageFile["2MB"]);
            $(sel.bin).moveTo()
            browser.pause(1000);
            const del = $(sel.bin).isClickable();
            expect(del).toEqual(false);
            });
    });
});
