function attachEvents() {
    const elements = {
        authorInput: document.querySelector('#author'),
        contentInput: document.querySelector('#content'),
        sendBtn: document.querySelector('#submit'),
        refreshBtn: document.querySelector('#refresh'),
        textArea: document.querySelector('#messages')
    }

    const url = 'https://rest-messanger.firebaseio.com/messanger.json';

    elements.sendBtn.addEventListener('click', addMessage);

    elements.refreshBtn.addEventListener('click', loadMessages);


    function addMessage(e) {
        e.preventDefault();

        const author = elements.authorInput.value;
        const content = elements.contentInput.value;

        const postRequestObj = {
            method: 'POST',
            body: JSON.stringify({
                author,
                content
            })
        }

        fetch(url, postRequestObj)
            .then()
            .catch(errorHandler)

        elements.authorInput.value = '';
        elements.contentInput.value = '';
    }

    function loadMessages(e) {
        e.preventDefault();

        fetch(url)
            .then(jsonParse)
            .then(displayMessages)
            .catch(errorHandler);
    }

    function displayMessages(data) {
        let allMessages = formatMessagesToString(data);
        elements.textArea.value = allMessages;
    };

    function formatMessagesToString(messageObj) {

        return Object.values(messageObj)
            .map(formatCurrentMessage)
            .join('\n');
    }

    const jsonParse = (res) => res.json();

    const formatCurrentMessage = ({ author, content }) => `${author}: ${content}`;

    const errorHandler = (e) => {
        console.dir(e);
    };
}

attachEvents();