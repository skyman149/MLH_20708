const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');

describe('Story', function () {
    it('TC-60.1 Choose a story', function () {
        browser.url('');
        $(sel.storyClick).click();
        $$(sel.storyType)[0].click();
        const value = $$(sel.storyType)[0].getAttribute('title');
        expect(value).toEqual(exp.story0);
    });
    it('TC-60.2 Choose a story', function () {
        $(sel.storyClick).click();
        $$(sel.storyType)[1].click();
        const value = $$(sel.storyType)[1].getAttribute('title');
        expect(value).toEqual(exp.story1);
    });
    it('TC-60.3 Choose a story', function () {
        $(sel.storyClick).click();
        $$(sel.storyType)[2].click();
        const value = $$(sel.storyType)[2].getAttribute('title');
        expect(value).toEqual(exp.story2);
    });
    it('TC-60.4 Choose a story', function () {
        $(sel.storyClick).click();
        $$(sel.storyType)[3].click();
        const value = $$(sel.storyType)[3].getAttribute('title');
        expect(value).toEqual(exp.story3);
    });
    it('TC-60.5 Choose a story', function () {
        $(sel.storyClick).click();
        $$(sel.storyType)[4].click();
        const value = $$(sel.storyType)[4].getAttribute('title');
        expect(value).toEqual(exp.story4);
    });
    it('TC-60.6 Choose a story', function () {
        $(sel.storyClick).click();
        $$(sel.storyType)[5].click();
        const value = $$(sel.storyType)[5].getAttribute('title');
        expect(value).toEqual(exp.story5);
    });
    it('TC-60.7 Choose a story', function () {
        $(sel.storyClick).click();
        $$(sel.storyType)[6].click();
        const value = $$(sel.storyType)[6].getAttribute('title');
        expect(value).toEqual(exp.story6);
    });
});