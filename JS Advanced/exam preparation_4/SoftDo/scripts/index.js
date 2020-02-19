function mySolution() {
    let $textArea = document.querySelector('#inputSection > textarea');
    let $username = document.querySelector('#inputSection > div > input[type=username]');
    let $sendBtn = document.querySelector('#inputSection > div > button');
    let $pendingQuestionsDiv = document.getElementById('pendingQuestions');
    let $openQuestionsDiv = document.getElementById('openQuestions');

    $sendBtn.addEventListener('click', addQuestion);

    function addQuestion(e) {
        let question = $textArea.value;
        let username = $username.value === '' ? 'Anonymous' : $username.value;
        let $questionDiv = createHTMLElement('div', 'pendingQuestion');
        let $img = createHTMLElement('img', null, null, [{ k: 'src', v: './images/user.png' }, { k: 'width', v: 32 }, { k: 'height', v: 32 }]);
        let $usernameSpan = createHTMLElement('span', null, username);
        let $questionP = createHTMLElement('p', null, question);
        let $actionsDiv = createHTMLElement('div', 'actions');
        let $archiveBtn = createHTMLElement('button', 'archive', 'Archive', null, { name: 'click', func: archiveQuestion });
        let $openBtn = createHTMLElement('button', 'open', 'Open', null, { name: 'click', func: openQuestion });

        $actionsDiv = appendChildrenToParent([$archiveBtn, $openBtn], $actionsDiv);

        $questionDiv = appendChildrenToParent([$img, $usernameSpan, $questionP, $actionsDiv], $questionDiv);

        $pendingQuestionsDiv.appendChild($questionDiv);

        $textArea.value = '';
        $username.value = '';
    }

    function archiveQuestion(e) {
        let $archivedQuestionDiv = e.target.parentNode.parentNode;
        $archivedQuestionDiv.remove();
    }

    function openQuestion(e) {
        let $openedQuestionDiv = e.target.parentNode.parentNode;
        $openedQuestionDiv.className = 'openQuestion';

        let $actionsDiv = $openedQuestionDiv.querySelector('div.actions');
        $actionsDiv.innerHTML = '';
        let $replyBtn = createHTMLElement('button', 'reply', 'Reply', null, { name: 'click', func: replyToQuestion });
        $actionsDiv.appendChild($replyBtn);

        let $replySectionDiv = createHTMLElement('div', 'replySection', null, [{ k: 'style', v: 'display: none;' }]);
        let $input = createHTMLElement('input', 'replyInput', null, [{ k: 'type', v: 'text' }, { k: 'placeholder', v: 'Reply to this question here...' }]);
        let $sendAnswerBtn = createHTMLElement('button', 'replyButton', 'Send', null, { name: 'click', func: sendAnswer });
        let $ol = createHTMLElement('ol', 'reply', null, [{ k: 'type', v: 1 }]);

        $replySectionDiv = appendChildrenToParent([$input, $sendAnswerBtn, $ol], $replySectionDiv);

        $openedQuestionDiv.appendChild($replySectionDiv);
        $openQuestionsDiv.appendChild($openedQuestionDiv);

    }

    function replyToQuestion(e) {
        let button = e.target;

        let $replySectionOfTheQeustion = this.parentNode.parentNode.querySelector('.replySection');

        if (button.textContent === 'Reply') {
            $replySectionOfTheQeustion.style.display = 'block';
            button.textContent = 'Back';
        }
        else {
            $replySectionOfTheQeustion.style.display = 'none';
            button.textContent = 'Reply';
        }

    }

    function sendAnswer(e) {
        let button = e.target;
        let $answer = button.parentNode.querySelector('.replyInput');
        let $ol = button.parentNode.querySelector('.reply');

        if ($answer.value !== '') {
            let li = createHTMLElement('li', null, $answer.value);
            $ol.appendChild(li);
            $answer.value = '';
        }
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
