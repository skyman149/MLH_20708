const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const clearElementValue = require ('../../helpers/clearElementValue')

describe('Testing age section', function () {


    describe('Testing input field value verification', function () {

        it('TC-034 Verify that input field is accepted 12 symbols', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const input = $(sel.age);
            input.setValue(data.twelveNumbers);
            expect(input.getValue()).toEqual(data.twelveNumbers);
            clearElementValue(input);
        });

        it('TC-035 Verify that input field is accepted positive integers only', function () {
            const input = $(sel.age);
            input.setValue(data.letters);
            $$(sel.label)[2].click();
            expect(input.getValue()).toEqual('');
            clearElementValue(input);
            let arr = data.symbols.split('');
            for (let i = 0; i < arr.length; i++) {
              input.setValue(arr[i]);
              $$(sel.label)[2].click();
              expect(input.getValue()).toEqual('');
            }
            input.setValue('-' + data.testNumber);
            expect(input.getValue()).toEqual('');
            clearElementValue(input);
            input.setValue(data.decimalNumber);
            expect(input.getValue()).toEqual(Math.trunc(+data.decimalNumber));
            clearElementValue(input);
        });

        it('41 Input field value increases by 1 if clicking on up spinner button', function () {
            const input = $(sel.age);
            const spinUp = $$(".ant-input-number-handler-wrap span")[1];
            clearElementValue(input);
            input.setValue(data.age);
            let testValue = input.getValue();
            spinUp.click();
            +testValue++;
            expect(input.getValue()).toEqual(`${testValue}`);
        });

        it('TC-41.1 Input field value decreases by 1 if clicking on up spinner button', function () {
            const input = $(sel.age);
            const spinUp = $$(".ant-input-number-handler-wrap span")[3];
            clearElementValue(input);
            input.setValue(data.age);
            let testValue = input.getValue();
            spinUp.click();
            +testValue--;
            expect(input.getValue()).toEqual(`${testValue}`);

        });

        it('TC-49 Verify input field cannot be longer than 12 symbols', function () {
            const input = $(sel.age);
            clearElementValue(input);
            input.setValue(data.twelveNumbers);
            input.addValue(data.testNumber);
            expect(input.getValue()).toEqual(data.twelveNumbers);
        });

    });
});