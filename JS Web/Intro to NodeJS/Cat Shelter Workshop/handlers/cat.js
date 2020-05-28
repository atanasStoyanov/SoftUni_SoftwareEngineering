const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');
const errorHandler = require('../utils/errorHandler');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/addCat' && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/cats/addCat.html')
        );

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                errorHandler(err, res);
                return;
            }

            const breedOptions = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            const modifiedData = data.toString().replace('{{catBreeds}}', breedOptions);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(modifiedData);
            res.end();
        });

    } else if (pathname === '/cats/addCat' && req.method === 'POST') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {

            if (err) {
                errorHandler(err, res);
                return;
            }

            const oldPath = files.upload.path;
            const newPath = path.normalize(
                path.join(__dirname, '../content/images/' + files.upload.name));


            fs.rename(oldPath, newPath, err => {
                if (err) {
                    errorHandler(err, res);
                    return;
                }

                console.log('File was uploaded successfully');
            });

            const filePath = path.normalize(
                path.join(__dirname, '../data/cats.json'));

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    errorHandler(err, res);
                    return;
                }

                let allCats = JSON.parse(data);

                const id = allCats.length > 0 ? Number(allCats[allCats.length - 1].id) + 1 : 1; // the id of the last cat + 1 or 1 if no cats in db;

                allCats.push({
                    id,
                    ...fields,
                    image: files.upload.name
                });

                fs.writeFileSync(filePath, JSON.stringify(allCats));

                res.writeHead(301, { 'Location': '/' });
                return res.end();
            });
        });

    } else if (pathname === '/cats/addBreed' && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/cats/addBreed.html'));

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                errorHandler(err, res);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    } else if (pathname === '/cats/addBreed' && req.method === 'POST') {
        let formData = '';

        req.on('data', data => {
            formData += data;
        });

        req.on('end', () => {
            const filePath = path.normalize(
                path.join(__dirname, '../data/breeds.json'));

            const body = qs.parse(formData);

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    errorHandler(err, res);
                    return;
                }

                let breeds = JSON.parse(data);
                breeds.push(body.breed);

                fs.writeFileSync(filePath, JSON.stringify(breeds));

                res.writeHead(301, { 'Location': '/' });
                return res.end();
            });
        });
    } else {
        return true;
    }
}
