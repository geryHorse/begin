

const http = require('http');

const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        if (pathname !== '/favicon.ico') {
            console.log('Request for ' + pathname + ' reveived');
            route(handle, pathname, response);
        } else {
            response.end();
        }        
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;

