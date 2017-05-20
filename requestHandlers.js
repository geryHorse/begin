

function sleep(millSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + millSeconds);
}

function start() {
    console.log('Request handler "start" was called');    
    sleep(5000);
    return 'Hello Start';
}

function upload() {
    console.log('Request handler "upload" was called');
    return 'Hello Upload';
}

exports.start = start;

exports.upload = upload;


