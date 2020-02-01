let button = document.getElementsByTagName('button')[0];
let notification = document.getElementById('notification');

if (button === null || notification === null) {
    throw new Error('Error...');
}

button.addEventListener('click', eventHandler);

function eventHandler() {
    notify('Something happened!');
}

function notify(message) {
    showHTMLElement(notification, message);
    setTimeout(hideNotification, 2000);
}

function showHTMLElement(HTMLElement, text) {
    HTMLElement.textContent = text;
    HTMLElement.style.display = 'block';
}

function hideNotification() {
    notification.style.display = 'none';
}

// Solution for judge.

// function notify(message) {
//     let notification = document.getElementById('notification');
//     notification.textContent = message;
//     notification.style.display = 'block';

//     setTimeout(hideNotification, 2000);

//     function hideNotification() {
//         notification.style.display = 'none';
//     }

// }