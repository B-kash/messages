const fs = require('fs');

function postSuggestion(suggestion) {
    let suggestions = [];
    suggestions = getSuggestions();
    if(!suggestions) suggestions = [];
    suggestions.push(JSON.stringify(suggestion));
    fs.writeFile("./app/data/message.txt", suggestions, function(err) {
        if (err) {
            return console.log(err);
        }
    });
    return 'success';
}

function getSuggestions() {
    fs.readFile('./app/data/message.txt', (err, data) => {
        if (err) {
            return [];
        }
        return JSON.parse(data);
    });
}
module.exports = {
    postSuggestion,
    getSuggestions
}