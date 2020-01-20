function solve(arr) {
    const escapeElementIfString = (el) => typeof el === 'string' ? escapeHTML(el) : el;
    const createTableHeading = (el) => `<th>${el}</th>`;
    const createTableCell = (el) => `<td>${el}</td>`;

    function createHeadingRow(headingsArr) {
        let headings = headingsArr
            .map(createTableHeading)
            .join('');

        return `   <tr>${headings}</tr>\n`;
    }

    function createTableRow(elementsArr) {
        let tableElements = elementsArr
            .map(escapeElementIfString)
            .map(createTableCell)
            .join('');

        return `   <tr>${tableElements}</tr>\n`;
    }

    function escapeHTML(str) {
        "use strict";
        return str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    let data = JSON.parse(arr);
    let result = '<table>\n';
    let keys = Object.keys(data[0]);

    result += createHeadingRow(keys);

    data.map(el => result += createTableRow(Object.values(el)));

    result += '</table>';

    return result;
}

console.log(solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));
