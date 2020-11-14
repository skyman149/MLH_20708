const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');

describe('Checking Name section', function () {
           it('TC-012 Verify that the input field accepts  letters A-Z,a-z', function () {
                browser.url('');
                $(sel.name).setValue(data.name);
                const value = $(sel.name).getValue();
                expect(value).toEqual("LadyBug");
           });
            it('TC-011 Verify that the input field accepts  digits 0 - 9', function (){
                browser.url('');
                $(sel.name).setValue('123456789');
                const value = $(sel.name).getValue();
                expect(value).toEqual('123456789');
            });
});



