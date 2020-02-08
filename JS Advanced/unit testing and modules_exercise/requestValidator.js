function solve(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^(\*|[A-Za-z0-9\.]+)$/gm;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /^[^<>\\&'"]*$/gm;

    if (obj.hasOwnProperty('method') === false || validMethods.includes(obj.method) === false) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.hasOwnProperty('uri') === false || uriPattern.test(obj.uri) === false) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (obj.hasOwnProperty('version') === false || validVersions.includes(obj.version) === false) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.hasOwnProperty('message') === false || messagePattern.test(obj.message) === false) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}


console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));
