const fs = require('fs');
const loggingService = require('./loggingService');
const filePath = path.join(__dirname, 'app', 'data','message.json');

function postSuggestion(suggestion) {
    let allSuggestions = [];
    allSuggestions = getSuggestions();
    allSuggestions.push((suggestion));
    fs.writeFile(filePath, JSON.stringify(allSuggestions), function(err) {
        if (err) {
//            return loggingService.error("Service.js ",err);
            console.log("Err",err);
        }
    });
    return 'success';
}

function getSuggestions() {
    let suggestions =[];
    try{
        suggestions= JSON.parse(fs.readFileSync(filePath));
    }catch(err){
//        loggingService.error("Service.js ",err);
        console.log("Err",err);
        suggestions = [];
    }
    return suggestions;
}
module.exports = {
    postSuggestion,
    getSuggestions
};