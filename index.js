const express = require('express');
const bodyParser = require('body-parser');
const service = require('./app/services/service');
const loggingService = require('./app/services/loggingService');

const  Suggestion = require('./app/models/Suggestion');
console.log("Hello app started on 3000 port");
let app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.get('/messages',(req,res)=>{
	res.send(service.getSuggestions());
});
app.post('/messages', (req, res) => {
	let suggestion = new Suggestion(req.body);
	res.send(service.postSuggestion(suggestion));
});
app.listen(3000);