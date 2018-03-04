// let method = Suggestion.prototype;
//
// function Suggestion(suggestion){
//     this.name = suggestion.name;
//     this.email = suggestion.email;
//     this.message = suggestion.message;
// }
//
// module.exports = Suggestion;

'use strict';
class Suggestion {
    constructor(suggestion) {
        if(suggestion){
            this.name = suggestion.name?suggestion.name:null;
            this.email = suggestion.email?suggestion.email:null;
            this.message = suggestion.message?suggestion.message:null;
        }
    }
}
module.exports = Suggestion;
