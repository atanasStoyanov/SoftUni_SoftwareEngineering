function solve() {

    let $bookTitle = document.querySelector('body > form > input[type=text]:nth-child(2)');
    let $bookYear = document.querySelector('body > form > input[type=number]:nth-child(4)');
    let $bookPrice = document.querySelector('body > form > input[type=number]:nth-child(6)');
    let $addBtn = document.querySelector('body > form > button');
    let $newBooksShelf = document.querySelector('#outputs > section:nth-child(2) > div');
    let $oldBooksShelf = document.querySelector('#outputs > section:nth-child(1) > div');
    let $totalProfit = document.querySelector('body > h1:nth-child(3)');
    let profit = 0;

    $addBtn.addEventListener('click', addBook);

    function addBook(e) {
        e.preventDefault();

        let title = $bookTitle.value;
        let year = Number($bookYear.value);
        let price = year >= 2000 ? Number($bookPrice.value) : Number($bookPrice.value) * 0.85;

        if (title !== '' && year > -1 && price > -1) {
            let $newBookDiv = createHTMLElement('div', 'book');
            let $newBookP = createHTMLElement('p', null, `${title} [${year}]`);
            let $buyBtn = createHTMLElement('button', null, `Buy it only for ${price.toFixed(2)} BGN`, null, { name: 'click', func: buyBook });
            let $moveBtn = createHTMLElement('button', null, 'Move to old section', null, { name: 'click', func: moveToOldBooks });

            if (year >= 2000) {
                $newBookDiv = appendChildrenToParent([$newBookP, $buyBtn, $moveBtn], $newBookDiv);
                $newBooksShelf = appendChildrenToParent([$newBookDiv], $newBooksShelf);
            } else {
                $newBookDiv = appendChildrenToParent([$newBookP, $buyBtn], $newBookDiv);
                $oldBooksShelf = appendChildrenToParent([$newBookDiv], $oldBooksShelf);
            }

            $bookTitle.value = '';
            $bookYear.value = '';
            $bookPrice.value = '';
        }

    }

    function moveToOldBooks(e) {
        let parent = e.target.parentNode;
        let $buyBtn = parent.querySelectorAll('button')[0];
        let bookPrice =  Number($buyBtn.textContent.match(/[\d.]+/gm));
        bookPrice *= 0.85;
        $buyBtn.textContent = `Buy it only for ${bookPrice.toFixed(2)} BGN`;

        $oldBooksShelf.appendChild(parent);
        e.target.remove();
    }

    function buyBook(e) {
        let parent = e.target.parentNode;
        let bookPrice = Number(e.target.textContent.match(/[\d.]+/gm));
        profit += bookPrice;
        $totalProfit.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`;
        parent.remove();
    }

    function createHTMLElement(tagName, className, textContent, atributes, event) {
        let element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (atributes) {
            atributes.forEach(a => element.setAttribute(a.k, a.v));
        }

        if (event) {
            element.addEventListener(event.name, event.func)
        }

        return element;
    }

    function appendChildrenToParent(childrenArr, parent) {
        childrenArr.forEach(c => parent.appendChild(c));
        return parent;
    }
}