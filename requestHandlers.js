

function sleep(millSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + millSeconds);
}

const exec = require('child_process').exec;

function start(response) {
    console.log('Request handler "start" was called');    
    
    exec('find /',
        {timeout: '5000', maxBuffer: 20000*1024},
     function(error, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        // console.log(stdout)
        response.write(stdout);
        response.end();
    });

    // sleep(5000);
    // return 'Hello Start';
}

function upload(response) {
    console.log('Request handler "upload" was called');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Upload');
    response.end();

    // return 'Hello Upload';
}

exports.start = start;

exports.upload = upload;


