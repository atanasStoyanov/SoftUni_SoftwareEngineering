let button = document.querySelector('input[type=button]');
let resultField = document.getElementById('result');

window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', eventHandler);
});

function eventHandler(e) {
    e.preventDefault();
    let textArr = JSON.parse(document.getElementById('arr').value);

    getUserData(textArr);
}

function getUserData(arr) {
    let pattern = /(?<firstName>[A-Z]{1}[a-z]*) (?<surname>[A-Z]{1}[a-z]+) (?<mobile>\+359(?<del>[\s?|\-])[0-9]{1}\k<del>[0-9]{3}\k<del>[0-9]{3}) (?<email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})/gm;
    arr.map(user => {
        let matches = pattern.exec(user)
        if (matches !== null) {
            let {firstName, surname, mobile, email} = matches.groups;
            let name = `Name: ${firstName} ${surname}`;
            let phone = `Phone Number: ${mobile}`;
            let mail = `Email: ${email}`;

            createAndAppendHTMLElement('p', name, resultField);
            createAndAppendHTMLElement('p', phone, resultField);
            createAndAppendHTMLElement('p', mail, resultField);
            createAndAppendHTMLElement('p', '- - -', resultField);
        } else {
            createAndAppendHTMLElement('p', 'Invalid data', resultField);
            createAndAppendHTMLElement('p', '- - -', resultField);
        }

    });

}

function createAndAppendHTMLElement(tag, text, parent) {
    let HTMLElement = document.createElement(tag);
    HTMLElement.textContent = text;
    parent.appendChild(HTMLElement);
}


//Solution for judge. Add onclick="solve()" to the input tag with type='button'

// function solve() {
//     let textArr = JSON.parse(document.getElementById('arr').value);
//     let resultField = document.getElementById('result');

//     function getUserData(arr) {
//         let pattern = /(?<firstName>[A-Z]{1}[a-z]*) (?<surname>[A-Z]{1}[a-z]+) (?<mobile>\+359(?<del>[\s?|\-])[0-9]{1}\k<del>[0-9]{3}\k<del>[0-9]{3}) (?<email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})/gm;
//         arr.map(user => {
//             let matches = pattern.exec(user)
//             if (matches !== null) {
//                 let {firstName, surname, mobile, email} = matches.groups;
//                 let name = `Name: ${firstName} ${surname}`;
//                 let phone = `Phone Number: ${mobile}`;
//                 let mail = `Email: ${email}`;

//                 createAndAppendHTMLElement('p', name, resultField);
//                 createAndAppendHTMLElement('p', phone, resultField);
//                 createAndAppendHTMLElement('p', mail, resultField);
//                 createAndAppendHTMLElement('p', '- - -', resultField);
//             } else {
//                 createAndAppendHTMLElement('p', 'Invalid data', resultField);
//                 createAndAppendHTMLElement('p', '- - -', resultField);
//             }

//         });

//     }

//     function createAndAppendHTMLElement(tag, text, parent) {
//         let HTMLElement = document.createElement(tag);
//         HTMLElement.textContent = text;
//         parent.appendChild(HTMLElement);
//     }

//     getUserData(textArr)

// }