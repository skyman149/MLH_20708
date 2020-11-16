const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const imageUpload = require('../../helpers/imageUpload.js');

describe('Image section', function () {

    describe('Verifying elements and names and positive test cases', function () {

        it('TC-071 Verify that uploaded image is shown with max side = 500px', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const createBtn = $(sel.create);
            imageUpload(data.imageFile.JPEG);
            createBtn.click();
            const img = $(sel.uploadedImage);
            const width = img.getSize('width')
            expect(width === exp.imageWidth).toEqual(true); // false
            // expect(width === 200).toEqual(true); // true
        });

        it('TC-072 Verify that uploaded image is shown with max side = 500px', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Tragedy, data.imageFile.JPEG);
            $(sel.create).click();
            const img = $(sel.uploadedImage);
            const width = img.getSize('width')
            expect(width === exp.imageWidth).toEqual(true); // false
            // expect(width === 200).toEqual(true); // true
        });
    });
});