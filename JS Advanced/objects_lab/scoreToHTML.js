function solve(arr) {
    let data = JSON.parse(arr);

    function createHTMLElement(name, score, tag) {
        return `   <tr><${tag}>${name}</${tag}><${tag}>${score}</${tag}></tr>\n`
    }

    let result = '<table>\n';
    result += createHTMLElement('name', 'score', 'th');

    data.map(person => result += createHTMLElement(escapeHTML(person.name), person.score, 'td'));

    result += '</table>'

    function escapeHTML(str) {
        "use strict";
        return str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    return result;
}

console.log(solve(['[{"name":"Pesho & Kiro","score":479}, {"name":"Gosho, Maria & Viki","score":205}]']));
