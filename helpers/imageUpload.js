const path = require('path');

function imageUpload(fileName){
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, fileName);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = imageUpload;