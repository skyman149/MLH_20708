const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');

describe('Image section', function () {

    describe('Verifying elements and names and positive test cases', function () {
        it('TC-062 Label for Image', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const label = $$(sel.label)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-063 Label for Image = 5. Upload an image (optional).', function () {
            const text = $$(sel.label)[4].getAttribute('textContent');
            expect(text).toEqual(exp.labelImage);
        });

        it('TC-064 File input field is present', function () {
            const input = $(sel.fileInput).isDisplayed();
            expect(input).toEqual(true);
        });

        it('TC-064.1 File input field has square shape', function () {
            const field = $(sel.fileInput);
            const width = field.getSize('width')
            const height = field.getSize('height')
            expect(width === height).toEqual(true);
        });

        it('TC-065 Placeholder for file input field = drag and drop your image here or browse', function () {
            const text = $(sel.fileInputPlaceholder).getText();
            expect(text).toEqual(exp.fileInputPlaceholder);
        });
    });
});