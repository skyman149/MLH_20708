const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json'); // ../ -> one level(directory) up

describe('Inputs', function () {

    describe('Inputs', function () {
        it('TC-014 Name displayed', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed(); // $ - element, $$ - array element
            expect(name).toEqual(true);
        });

        it('TC-015 Gender (he) displayed', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender (she) displayed', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender (it) displayed', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age displayed', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story displayed', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Create button displayed', function () {
            const create = $(sel.create).isDisplayed();
            expect(create).toEqual(true);
        });

    });

    describe('Placeholders are correct', function(){
        // HW
    });

});