
function checkUpperCase (story) {

    const name = "muffin man";
    const nameLower = ". " + name;
    const nameUpper = ". " + name[0].toUpperCase() + name.slice(1, name.length);
    return story.search(nameUpper) > story.search(nameLower);
};

module.exports = checkUpperCase;
