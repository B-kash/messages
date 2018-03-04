/**
 * Created by bikash on 3/4/18.
 */
const fs = require('fs');
let logs = {
    error,
    warning,
    info,
    debug
}
function error(from,message){
    let time = new Date().toISOString();
    let completeMessage = time+" "+from+" "+message+"\n";
    try{
        let stream = fs.createWriteStream('./app/logs/error.log', {flags:'a'});
        stream.write(completeMessage);
        stream.end();
    }catch (err){
        console.log("Could not append error log " ,err);
    }
    return;
}
function info(from,message){
    let time = new Date().toISOString();
    let completeMessage = time+" "+from+" "+message+"\n";
    try{
        let stream = fs.createWriteStream('./app/logs/info.log', {flags:'a'});
        stream.write(completeMessage);
        stream.end();
    }catch (err){
        console.log("Could not append to info log " ,err);
    }
    return;
}
function warning(from,message){
    let time = new Date().toISOString();
    let completeMessage = time+" "+from+" "+message+"\n";
    try{
        let stream = fs.createWriteStream('./app/logs/warning.log', {flags:'a'});
        stream.write(completeMessage);
        stream.end();
    }catch (err){
        console.log("Could not append to warning log " ,err);
    }
    return;
}
function debug(from,message){
    let time = new Date().toISOString();
    let completeMessage = time+" "+from+" "+message+"\n";
    try{
        let stream = fs.createWriteStream('./app/logs/debug.log', {flags:'a'});
        stream.write(completeMessage);
        stream.end();
    }catch (err){
        console.log("Could not append to debug log " ,err);
    }
    return;
}
module.exports = logs;