const app = require('express')
const http = require('http').Server(app);
const fs = require('fs');

const dir = __dirname + '/public'

app.get('/', function (req, res) {
    var content = fs.readFileSync(__dirname + "/index.html");
    res.end(content);
});

app.use('/files', function (req, res) {
    try {
        try {
            var content = fs.readFileSync(__dirname + req.url + '.html');
            res.end(content);
        } catch {
            var content = fs.readFileSync(__dirname + req.url);
            res.end(content);
        }
    } catch {
        var content = fs.readFileSync(__dirname + '/404.html');
        res.status(404);
        res.end(content);
    }
});

http.listen(process.env.PORT || 19132, function () {
    console.log("Server is online");
  });