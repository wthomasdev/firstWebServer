const express = require('express');
const app = express();
const port = 3000;

var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request ' + req.method + ' ' + req.originalUrl + ' on this date: ' + new Date().toString());
        next();
    }
}


app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log("Express server started!");
    console.log("Using port " + port);
});
