const url = require('url');
const fs = require('fs');

function getContentType(url) {
    if (url.endsWith('css')) {
        return 'text/css';
    } else if (url.endsWith('html')) {
        return 'text/html';
    } else if (url.endsWith('png')) {
        return 'image/png';
    } else if (url.endsWith('js')) {
        return 'file/js';
    } else if (url.endsWith('ico')){
        return 'image/x-icon'
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {
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
}


// const url = require('url');
// const fs = require('fs');

// function getContentType(url) {
//     if (url.endsWith('css')) {
//         return 'text/css';
//     } else if (url.endsWith('html')) {
//         return 'text/css';
//     } else if (url.endsWith('png')) {
//         return 'image/png';
//     } else if (url.endsWith('js')) {
//         return 'file/js';
//     } else {
//         return
//     }
// }

// module.exports = (req, res) => {
//     const isContent = url.parse(req.url).pathname.split('/')[1];
//     const pathname = url.parse(req.url).pathname;
//     if (isContent === 'content' && req.method === 'GET') {
//         fs.readFile(`./${pathname}`, 'utf-8', (err, data) => {
//             if (err) {
//                 console.error(err);
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.write('File not found.');
//                 res.end();
//                 return
//             }

//             const type = getContentType(pathname);
//             res.writeHead(200, { 'Content-Type': type });
//             res.write(data);
//             res.end();
//         });
//     } else {
//         return true
//     }
// }