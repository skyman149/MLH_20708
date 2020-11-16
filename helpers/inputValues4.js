const sel = require('../data/selectors.json');
const imageUpload = require('../helpers/imageUpload')


function inputValues4(name, gender, age, storyType, fileName = ''){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    if (fileName !== '') {
        imageUpload(fileName);
    }
}

module.exports = inputValues4;
