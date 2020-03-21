//use live server to run the project

import { createNewBook, getAllBooks, getBookById, updateBook, deleteBook, patchBook, errorHandler } from './firebase-requests.js';
import { addTableRow } from './table-helpers.js';
import { extractFormData, fillFormWithData, clearForm } from './form-helpers.js';


(function () {

    const formInputs = ['title', 'author', 'isbn'];
    const tagFormInputs = ['tags'];

    const formRef = document.querySelector('form');
    const tBodyRef = document.querySelector('tbody');
    const loadBooksButton = document.querySelector('#loadBooks');
    const tagForm = document.querySelector('#tagForm');

    let targetBookId = '';

    formRef.addEventListener('submit', submitNewBook);

    loadBooksButton.addEventListener('click', loadBooks);

    tBodyRef.addEventListener('click', editBook);

    tagForm.addEventListener('submit', addTagsToBook);

    function submitNewBook(e) {
        e.preventDefault();

        let parsedFormInputs = extractFormData(formRef, formInputs);

        createNewBook(parsedFormInputs)
            .then(() => loadBooks())
            .catch(errorHandler);

        clearForm(formRef);
    }

    function loadBooks() {
        getAllBooks()
            .then(res => {
                tBodyRef.innerHTML = '';

                Object.entries(res)
                    .map(([id, bookInfo]) => {
                        addTableRow(tBodyRef, bookInfo, id)
                    });
            }).catch(errorHandler);
    }

    function editBook(e) {
        e.preventDefault();

        targetBookId = e.target.closest('tr').dataset.bookId;

        if (e.target instanceof HTMLButtonElement) {
            const { method } = e.target.dataset;

            if (method === 'edit') {
                const body = extractFormData(formRef, formInputs);

                updateBook(body, targetBookId)
                    .then(() => loadBooks())
                    .catch(errorHandler);

                clearForm(formRef);
                clearForm(tagForm)
            }

            if (method === 'delete') {
                deleteBook(targetBookId)
                    .then(() => loadBooks())
                    .catch(errorHandler);
            }
            return;
        }

        getBookById(targetBookId).then(res => {
            let bookFormInputs = Object.entries(res).filter(([inputName, value]) => inputName !== 'tags');
            let tagFormInput = Object.entries(res).filter(([inputName, value]) => inputName === 'tags');

            fillFormWithData(formRef, bookFormInputs);
            fillFormWithData(tagForm, tagFormInput);

        });

    }

    function addTagsToBook(e) {
        e.preventDefault();
        let parsedFormInputs = extractFormData(tagForm, tagFormInputs);
        const tagsArr = parsedFormInputs.tags.split(',');
        const body = {
            tags: tagsArr
        }

        patchBook(body, targetBookId)
            .then(() => loadBooks())
            .catch(errorHandler);

        clearForm(tagForm);
        clearForm(formRef);
    }
}());

