const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const errorHandler = require('../utils/errorHandler');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/' && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                errorHandler(err, res);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    } else {
        return true;
    }
}
