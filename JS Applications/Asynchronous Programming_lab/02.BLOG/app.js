function attachEvents() {
    const elements = {
        loadPostsBtn: document.querySelector('#btnLoadPosts'),
        selectDropDown: document.querySelector('#posts'),
        viewBtn: document.querySelector('#btnViewPost'),
        postTitle: document.querySelector('#post-title'),
        postBody: document.querySelector('#post-body'),
        commentsList: document.querySelector('#post-comments'),
    }

    const jsonParse = (res) => res.json();
    const errorHandler = (err) => console.log(err);

    const baseURL = 'https://blog-apps-c12bf.firebaseio.com/posts';
    const postsURL = `${baseURL}.json`;

    elements.loadPostsBtn.addEventListener('click', loadPosts);
    elements.viewBtn.addEventListener('click', viewPost);

    function loadPosts(e) {
        e.preventDefault();

        fetch(postsURL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }

                return res;
            })
            .then(jsonParse)
            .then(data => {

                Object.entries(data)
                    .forEach(([key, postObj]) => {
                        const option = createHTMLElement('option', null, postObj.title, [{k: 'value', v: key}, {k: 'id', v: postObj.id}]);
                        elements.selectDropDown.appendChild(option);
                    });
            })
            .catch(errorHandler)
    }

    function viewPost(e) {
        e.preventDefault();

        let postId = elements.selectDropDown.value;
        const currentPostURL = `${baseURL}/${postId}`;
        
        fetch(currentPostURL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }

                return res;
            })
            .then(jsonParse)
            .then(data => {
                //TO DO ...
            })
            .catch(errorHandler);
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

attachEvents();