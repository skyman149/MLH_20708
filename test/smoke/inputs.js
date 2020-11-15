const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-009 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-028.1 Gender(he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-028.2 Gender(she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-028.3 Gender(it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-031.1 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-058 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-021 Create ', function () {
            const label = $(sel.create).getText();
            expect(label).toEqual(exp.button);
        });

    });

    describe('Placeholders are correct', function () {

        it('TC-009.1 Placeholder for Name is Hero\'s name', function () {
            const placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderName);
        });

        it('TC-032 Placeholder for Age is Hero\'s age', function () {
            const placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderAge);
        });

        it('TC-058.1 Placeholder for Type of story is Type of the story', function () {
            const placeholder = $(sel.story).getText();
            expect(placeholder).toEqual(exp.placeholderStory);
        });


        it('TC-028.4 Placeholder for she', function () {
            const placeholder = $$(sel.genderButton)[1].getValue();
            expect(placeholder).toEqual(exp.placeholderShe);
        });


        it('TC-028.5 Placeholder for he', function () {
            const placeholder = $$(sel.genderButton)[0].getValue();
            expect(placeholder).toEqual(exp.placeholderHe);
        });


        it('TC-028.6 Placeholder for it', function () {
            const placeholder = $$(sel.genderButton)[2].getValue();
            expect(placeholder).toEqual(exp.placeholderIt);
        });

    });
});