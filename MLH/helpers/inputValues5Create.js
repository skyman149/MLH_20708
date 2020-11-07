const sel = require('../data/selectors.json');
const imageUploadJPEGJPG = require('../helpers/imageUploadJPEG(JPG)');


function inputValues5Create(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    imageUploadJPEGJPG();
    $(sel.create).click();
}

module.exports = inputValues5Create;
