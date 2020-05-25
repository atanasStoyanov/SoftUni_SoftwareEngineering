const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method === 'GET'){

        let filePath = path.normalize(
            path.join(__dirname, '../views/addCat.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {'Content-Type' : 'text/plain'});
                res.write('Page not found!');
                res.end();
                return;
            }

            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        } )

    }
}