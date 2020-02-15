function solution() {

    let addGiftBtn = document.querySelector('body > div > section:nth-child(1) > div > button');
    let giftsList = document.querySelector('body > div > section:nth-child(2) > ul');
    let sentGiftsList = document.querySelector('body > div > section:nth-child(3) > ul');
    let discardedGiftsList = document.querySelector('body > div > section:nth-child(4) > ul');
    let input = document.querySelector('body > div > section:nth-child(1) > div > input[type=text]');

    addGiftBtn.addEventListener('click', addGift);


    function addGift(e) {
        let giftName = input.value;

        let newGiftLi = createHTMLElement('li', 'gift', giftName, null, null);
        let sendBtn = createHTMLElement('button', null, 'Send', [{ k: 'id', v: 'sendButton' }], { name: 'click', func: sendGift });
        let discardBtn = createHTMLElement('button', null, 'Discard', [{ k: 'id', v: 'discardButton' }], { name: 'click', func: discardGift });

        newGiftLi.appendChild(sendBtn);
        newGiftLi.appendChild(discardBtn);
        giftsList.appendChild(newGiftLi);

        sortGifts(giftsList);

        // addListenersToButtons();

        input.value = '';
    }

    // function addListenersToButtons() {
        
    //     let allSendButtons = document.querySelectorAll('#sendButton');
    //     let allDiscardButtons = document.querySelectorAll('#discardButton');

    //     allSendButtons.forEach(b => b.addEventListener('click', sendGift));
    //     allDiscardButtons.forEach(b => b.addEventListener('click', discardGift));
    // }

    

    function sortGifts(list) {
        let allElements = list.getElementsByTagName('li');
        // let vals = [];

        // for (let i = 0; i < allElements.length; i++) {
        //     vals.push(allElements[i].innerHTML);
        // }

        // vals.sort();

        // for (let i = 0; i < allElements.length; i++) {
        //     allElements[i].innerHTML = vals[i];
        // }

        for (let i = 0; i < allElements.length - 1; i++) {
            let firstElement = allElements[i];
            let nextElement = allElements[i + 1];

            if (firstElement.textContent.toLowerCase().localeCompare(nextElement.textContent.toLowerCase()) === 1) {
                list.insertBefore(nextElement, firstElement);
            }
        }
    }

    function discardGift(e) {
        let parent = e.target.parentNode;
        let buttons = parent.querySelectorAll('button');
        parent.removeChild(buttons[0]);
        parent.removeChild(buttons[1]);
        discardedGiftsList.appendChild(parent);
    }

    function sendGift(e) {

        let parent = e.target.parentNode;
        console.log(parent);

        let buttons = parent.querySelectorAll('button');
        parent.removeChild(buttons[0]);
        parent.removeChild(buttons[1]);
        sentGiftsList.appendChild(parent);
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

}