// To work in judge remove window.addEventListener and add window.onload = encodeAndDecodeMessages() to a script tag in HTML 

function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];
    let senderTextArea = document.getElementsByTagName('textarea')[0];
    let receiverTextArea = document.getElementsByTagName('textarea')[1];

    if (encodeBtn === null || decodeBtn === null || senderTextArea === null || receiverTextArea === null) {
        throw new Error('Error...');
    }

    encodeBtn.addEventListener('click', sendMessage);
    decodeBtn.addEventListener('click', readMessage);

    function sendMessage(e) {
        e.preventDefault();

        let message = senderTextArea.value;
        let encodedMessage = encodeMsg(message);
        receiverTextArea.value = encodedMessage;
        senderTextArea.value = '';
    }

    function readMessage(e) {
        e.preventDefault();

        let receivedMessage = receiverTextArea.value;
        let decodedMessage = decodeMsg(receivedMessage);
        receiverTextArea.value = decodedMessage;
    }

    function encodeMsg(msg) {
        return msg
            .split('')
            .map(letter => letter = String.fromCharCode(letter.charCodeAt() + 1))
            .join('');
    }

    function decodeMsg(msg) {
        return msg
            .split('')
            .map(letter => letter = String.fromCharCode(letter.charCodeAt() - 1))
            .join('');
    }

}

window.addEventListener('DOMContentLoaded', encodeAndDecodeMessages);