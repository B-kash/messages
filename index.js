const express = require('express');
const bodyParser = require('body-parser');
const service = require('./app/services/service');
const loggingService = require('./app/services/loggingService');

const  Suggestion = require('./app/models/Suggestion');
console.log("Hello app started on 3000 port");
let app = express();

app.use( function (req, res,next) {
	console.log("at my own middleware");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
    // res.end();
});
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.get('/messages',(req,res)=>{
	res.send(service.getSuggestions());
});
app.post('/messages', (req, res) => {
	console.log(req.body);
	console.log("Entered into post method");
	console.log(req.body);
	let suggestion = new Suggestion(req.body);
	res.send(service.postSuggestion(suggestion));
});
app.listen(3000);