const sel = require('../data/selectors.json');
const imageUploadPNG = require('../helpers/imageUploadJPEG(JPG)');


function inputValues5CreatePNG(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    imageUploadPNG();
    $(sel.create).click();
}

module.exports = inputValues5CreatePNG;
