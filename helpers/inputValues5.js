const sel = require('../data/selectors.json');
const imageUpload2MB = require('../helpers/imageUpload2MB');


function inputValues5(name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    imageUpload2MB();
}

module.exports = inputValues5;
