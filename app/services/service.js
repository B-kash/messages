const fs = require('fs');
const loggingService = require('./loggingService');

function postSuggestion(suggestion) {
    let allSuggestions = [];
    allSuggestions = getSuggestions();
    allSuggestions.push((suggestion));
    fs.writeFile("./app/data/message.json", JSON.stringify(allSuggestions), function(err) {
        if (err) {
//            return loggingService.error("Service.js ",err);
        }
    });
    return 'success';
}

function getSuggestions() {
    let suggestions =[];
    try{
        suggestions= JSON.parse(fs.readFileSync('./app/data/message.json'));
    }catch(err){
//        loggingService.error("Service.js ",err);
        suggestions = [];
    }
    return suggestions;
}
module.exports = {
    postSuggestion,
    getSuggestions
};