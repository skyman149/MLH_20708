const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4.js');
const inputValues5Create = require('../../helpers/inputValues5Create.js');
const path = require('path');

describe('Image section', function () {

    describe('Verifying elements and names and positive test cases', function () {

        it('TC-071 Verify that uploaded image is shown with max side = 500px', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/spaceX.jpg');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function (){
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            inputDiv.setValue(remoteFilePath);
            createBtn.click();
            const img = $(sel.uploadedImage);
            const width = img.getSize('width')
            expect(width === 200).toEqual(true); // false
            // expect(width === 200).toEqual(true); // true
        });

        it('TC-072 Verify that uploaded image is shown with max side = 500px', function () {
            browser.url('');
            inputValues5Create(data.name, data.gender.she, data.age, data.storyType);
            const img = $(sel.uploadedImage);
            const width = img.getSize('width')
            expect(width === 200).toEqual(true); // false
            // expect(width === 200).toEqual(true); // true
        });
    });
});