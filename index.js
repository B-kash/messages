const express = require('express');
const bodyParser = require('body-parser');
const service = require('./app/service');

const  Suggestion = require('./app/models/Suggestion');
console.log("Hello app started on 3000 port");
let app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Welcome");
});
app.get('/messages',(req,res)=>{
	res.send(service.getSuggestions());
})
app.post('/messages', (req, res) => {
	
	res.send(service.postSuggestion(req.body));
    // console.log("message is ", (req.body));
    
});


app.listen(3000);