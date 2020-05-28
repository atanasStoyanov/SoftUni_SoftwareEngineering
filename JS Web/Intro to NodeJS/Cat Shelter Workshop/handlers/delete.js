const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');
const errorHandler = require('../utils/errorHandler');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.includes('/cats/findHome/') && req.method === 'GET') {

        const id = Number(pathname.split('/').pop());

        const filePath = path.normalize(
            path.join(__dirname, '../views/cats/catShelter.html'));

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                errorHandler(err, res);
                return;
            }

            const currentCat = cats.find(cat => cat.id === id);
            const imgPath = path.join('/content/images/' + currentCat.image);

            const modifiedData = data.toString()
                .replace('{{catId}}', id)
                .replace('{{catImage}}', imgPath)
                .replace('{{altImage', currentCat.name)
                .replace('{{catName}}', currentCat.name)
                .replace('{{description}}', currentCat.description)
                .replace('{{breedValue}}', currentCat.breed)
                .replace('{{breed}}', currentCat.breed)

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(modifiedData)
            res.end()
        });

    } else if (pathname.includes('/cats/findHome/') && req.method === 'POST') {

        const id = Number(pathname.split('/').pop());

        const filePath = path.normalize(
            path.join(__dirname, '../data/cats.json'));

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                errorHandler(err, res);
                return;
            }

            let allCats = Array.from(JSON.parse(data));
            const updatedCats = allCats.filter(cat => cat.id !== id);

            fs.writeFileSync(filePath, JSON.stringify(updatedCats));

            res.writeHead(301, { 'Location': '/' });
            return res.end();
        });
    } else {
        return true;
    }
}