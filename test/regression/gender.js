const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');

describe ('My tests', function () {

    describe('Gender', function () {


        it('TC-025 Gender choice is displayed', function () {
            browser.url('');
            const gender = $$(sel.label)[1].isDisplayed();
            expect(gender).toEqual(true);
        });


        it('TC-026 Gender field is required', function () {
            browser.url('');
            $(sel.name).setValue(data.name);
            $(sel.age).setValue(data.age);
            $(sel.story).click();
            $$(sel.storyType)[data.storyType.Quest].click();

            const create = $(sel.create).isEnabled();
            expect(create).toEqual(false);
        });

        it('TC-027 Gender field has radio buttons', function () {
            browser.url('');
            $$(sel.gender)[1].click();
            $$(sel.gender)[0].click();
            $$(sel.gender)[2].click();
            const rbItS = $$(sel.genderButton)[2].isSelected();
            expect(rbItS).toEqual(true);
        });

    });
});