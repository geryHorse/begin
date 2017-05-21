
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');


http.createServer(function(req, res) {
    if (req.url == '/uploads' && req.method.toLocaleLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('received upload: \n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
        '<form action="/uploads" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="name" placeholder="name"><br>'+
        '<input type="text" name="age" placeholder="age"><br>'+
        '<input type="text" name="title" placeholder="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
}).listen(8888);




