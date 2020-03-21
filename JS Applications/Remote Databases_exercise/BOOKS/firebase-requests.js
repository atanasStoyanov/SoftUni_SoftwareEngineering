export const apiKey = 'https://testapp-1c79d.firebaseio.com/'; // add your firebase URL here;

const JSONParser = (x) => x.json()

export const getAllBooks = () => {
    return fetch(`${apiKey}books.json`).then(JSONParser);
};

export const getBookById = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`).then(JSONParser);
};

export const createNewBook = (bookBody) => {
    return fetch(`${apiKey}books.json`, {
        method: 'POST',
        body: JSON.stringify(bookBody)
    }).then(JSONParser);
};

export const updateBook = (bookBody, bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`, {
        method: 'PUT',
        body: JSON.stringify(bookBody)
    }).then(JSONParser);
};

export const deleteBook = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`, {
        method: 'DELETE'
    }).then(JSONParser);
}

export const patchBook = (bookBody, bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`, {
        method: 'PATCH',
        body: JSON.stringify(bookBody)
    }).then(JSONParser);
};

export const errorHandler = (err) => console.log(err);