
const sel = require ('../data/selectors.json');

function inputValues3 ( gender, age, storyType) {

    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();

}
module.exports = inputValues3;
