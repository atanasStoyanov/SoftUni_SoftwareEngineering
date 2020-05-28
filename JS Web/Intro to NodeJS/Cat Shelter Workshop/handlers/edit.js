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

    if (pathname.includes('/cats/edit/') && req.method === 'GET') {

        const id = Number(pathname.split('/').pop());

        const filePath = path.normalize(
            path.join(__dirname, '../views/cats/editCat.html'));

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                errorHandler(err, res);
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });

            const breedOptions = breeds.map(breed => `<option value="${breed}">${breed}</option>`);
            
            const currentCat = cats.find(cat => cat.id === id);

            const modifiedData = data.toString()
                .replace('{{catBreeds}}', breedOptions)
                .replace('{{catName}}', currentCat.name)
                .replace('{{description}}', currentCat.description)
                .replace('{{catImage}}', currentCat.image)
                .replace('{{catId}}', id);

            res.write(modifiedData)
            res.end()
        });
    } else if (pathname.includes('/cats/edit/') && req.method === 'POST') {

        const form = new formidable.IncomingForm;
        const id = Number(pathname.split('/').pop());

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

                console.log('File uploaded successfully');

            });

            const filePath = path.normalize(
                path.join(__dirname, '../data/cats.json'));

            fs.readFile(filePath, 'utf8', (err, data) => {

                if (err) {
                    errorHandler(err, res);
                    return;
                }

                const allCats = JSON.parse(data);
                const newData = {
                    id,
                    ...fields,
                    image: files.upload.name
                }

                allCats[id - 1] = newData;

                fs.writeFileSync(filePath, JSON.stringify(allCats));

                res.writeHead(301, { 'Location': '/' });
                return res.end();
            });
        });
    } else {
        return true;
    }
}