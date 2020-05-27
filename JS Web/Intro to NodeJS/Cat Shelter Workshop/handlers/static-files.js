const url = require('url');
const fs = require('fs');

function getContentType(url) {
    if (url.endsWith('css')) {
        return 'text/css';
    } else if (url.endsWith('html')) {
        return 'text/css';
    } else if (url.endsWith('png')) {
        return 'image/png';
    } else if (url.endsWith('js')) {
        return 'file/js';
    } else if (url.endsWith('ico')) {
        return 'image/x-icon';
    } else if (url.endsWith('jpg')) {
        return 'image/jpeg';
    } else {
        return;
    }
}

module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {

        if (pathname.endsWith('png') || pathname.endsWith('jpg') || pathname.endsWith('ico') && req.method === 'GET') {
            fs.readFile(`./${pathname}`, (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('File not found');
                    res.end();
                    return;
                }

                res.writeHead(200, { 'Content-Type': getContentType(pathname) });
                res.write(data);
                res.end();
            });
        } else {
            fs.readFile(`./${pathname}`, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('File not found');
                    res.end();
                    return;
                }

                res.writeHead(200, { 'Content-Type': getContentType(pathname) });
                res.write(data);
                res.end();
            });
        }

    } else {
        return true;
    }
}
