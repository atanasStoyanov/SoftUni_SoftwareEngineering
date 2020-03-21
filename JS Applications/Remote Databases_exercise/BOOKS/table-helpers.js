export function addTableRow(tbody, bookInfo, bookId) {
    let tempRow = document.createElement('tr');
    tempRow.setAttribute('data-book-id', bookId);

    if (!bookInfo.tags) {
        bookInfo.tags = [];
    }

    tempRow.innerHTML = `
    <td>${bookInfo.title}</td>
    <td>${bookInfo.author}</td>
    <td>${bookInfo.isbn}</td>
    <td>${bookInfo.tags}</td>
    <td>
        <button data-method = "edit" >Edit</button>
        <button data-method = "delete">Delete</button>
    </td>`;

    tbody.appendChild(tempRow);
}

