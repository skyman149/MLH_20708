const path = require('path');

function imageUpload2MB(){
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, '../data/2MB.jpg');
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = imageUpload2MB;