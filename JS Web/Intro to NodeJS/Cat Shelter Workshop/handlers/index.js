const homeHandler = require('./home');
const staticFiles = require('./static-files');
const catHandler = require('./cat');
const editHandler = require('./edit')

module.exports = [homeHandler, staticFiles, catHandler, editHandler];