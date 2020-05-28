const homeHandler = require('./home');
const staticFiles = require('./static-files');
const catHandler = require('./cat');
const editHandler = require('./edit')
const deleteHandler = require('./delete');

module.exports = [homeHandler, staticFiles, catHandler, editHandler, deleteHandler];