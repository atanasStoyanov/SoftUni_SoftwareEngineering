const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const qs = require('querystring')
const errorHandler = require('../utils/errorHandler');

function catTempalte(cat) {
    return `
    <li>
        <img src="${path.join('/content/images/' + cat.image)}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
            <ul class="buttons">
                <li class="btn edit"><a href="/cats/edit/${cat.id}">Change Info</a></li>
                <li class="btn delete"><a href="/cats/findHome/${cat.id}">New Home</a></li>
            </ul>
        </li>
    `
}

function loadPage(req, res, sourceData) {
    const filePath = path.normalize(
        path.join(__dirname, '../views/home/index.html')
    );

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            errorHandler(err, res);
            return;
        }

        const catViews = sourceData.map(catTempalte);
        const modifiedData = data.replace('{{cats}}', catViews);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(modifiedData);
        return res.end();
    });
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/') {

        if (req.method === 'GET') {
            loadPage(req, res, cats);

        } else if (req.method === 'POST') {
            let formData = '';

            req.on('data', data => {
                formData += data;

                if (formData.length > 1e6) {
                    req.connection.destroy();
                }
            });

            req.on('end', () => {
                const body = qs.parse(formData);

                const filePath = path.normalize(
                    path.join(__dirname, '../data/cats.json'));


                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        errorHandler(err, res);
                        return;
                    }

                    const allCats = JSON.parse(data);
                    const filteredByName = allCats.filter(x => (x.name).toLocaleLowerCase() === body.search.toLocaleLowerCase());
                    const filteredByBreed = allCats.filter(x => (x.breed).toLocaleLowerCase() === body.search.toLocaleLowerCase());
                    const filtered = filteredByName.concat(filteredByBreed);

                    load(req, res, filtered);
                });
            });

        }

    } else {
        return true;
    }
}