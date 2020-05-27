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
            
            const modifiedCats = cats.map(cat => `
            <li>
                <img src="${path.join('/content/images/' + cat.image)}" alt="${cat.name}">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
					<ul class="buttons">
						<li class="btn edit"><a href="/catsEdit/${cat.id}">Change Info</a></li>
						<li class="btn delete"><a href="/catsFindHome/${cat.id}">New Home</a></li>
					</ul>
				</li>
            `);
            const modifiedData = data.toString().replace('{{cats}}', modifiedCats);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(modifiedData);
            res.end();
        })
    } else {
        return true;
    }
}
