const fs = require('fs');
const moment = require('moment');
const path = require('path');

function log(req, res, next){
    //Log line
    const logTime = moment().format('DD/MM/YYYY HH:mm:ss');
    const logLine = `${logTime} - ${req.method} - ${req.url}\n`;

    //Console.log data
    console.log(logLine);
    console.log('PARAMS: ', req.params);
    console.log('QUERY: ', req.query);
    console.log('BODY: ', req.body);

    //Write log line to file in disk
    fs.appendFile(path.join(__dirname, 'data', 'log.txt'), logLine, (err) => {
        if (err) throw err;
        next()
    });
}

module.exports = {
    log
};