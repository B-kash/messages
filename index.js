const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// const  Message = require('./models/message');
console.log("Hello app started on 3000 port");
let app = express();
app.use(bodyParser.json());
app.post('/messages', (req, res) => {

    console.log("message is ", JSON.stringify(req.body));
    res.send("Success or fail idk");
});
app.use("/", (req, res) => {
    res.send("Welcome");
});
app.listen(3000);