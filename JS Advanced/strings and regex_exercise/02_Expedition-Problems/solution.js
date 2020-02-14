function solve() {
    let key = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let resultField = document.getElementById('result');

    function decode(str) {
        let message = 'Message: ' + str.match(`${key}(.+)${key}`)[1];
        let pattern = /(?<direction>north|east).*?(?<coordinate>\d{2}).*?,.*?(?<decimal>\d{6})/gmi;

        let north;
        let east;

        let temp = pattern.exec(str);
        
        while (temp) {
            if(temp[1].toLocaleLowerCase() === 'east'){
                east = `${temp[2]}.${temp[3]} E`;
            } else {
                north = `${temp[2]}.${temp[3]} N`;
            }

            temp = pattern.exec(str)
        }


        createAndAppendHTMLElement('p', north, resultField);
        createAndAppendHTMLElement('p', east, resultField);
        createAndAppendHTMLElement('p', message, resultField);

    }

    function createAndAppendHTMLElement(tag, text, parent) {
        let HTMLElement = document.createElement(tag);
        HTMLElement.textContent = text;
        parent.appendChild(HTMLElement);
    }

    decode(text);
}