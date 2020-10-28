const http = require('http').createServer(servidor);
const fs = require('fs');

const dir = __dirname + '/public'

function servidor(req, res) {
    console.log('Novo request: ', req.url)
    if (req.url == '/') {
        var resp = fs.readFileSync(dir + '/index.html')
        res.end(resp);
    } else {
        try{
            try{
                var resp = fs.readFileSync(dir + req.url + '.html')
            }catch(err){
                var resp = fs.readFileSync(dir + req.url)
            }
        }catch(err){
            var resp = fs.readFileSync(dir + '/404.html')
        }
        res.end(resp);
    }
};

http.listen(process.env.PORT || 19132, function () {
    console.log("Server is online");
});