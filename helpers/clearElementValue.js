function clearElementValue (inputField) {
    const value = inputField.getValue();
    for (let i = 0; i < value.length; i++) {
        browser.keys('Backspace')
    }
    inputField.setValue('');
}
module.exports = clearElementValue;