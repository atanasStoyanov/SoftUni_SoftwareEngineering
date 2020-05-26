module.exports = (err, res) => {
    console.log(err);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page Not Found');
    res.end();
    return;
}