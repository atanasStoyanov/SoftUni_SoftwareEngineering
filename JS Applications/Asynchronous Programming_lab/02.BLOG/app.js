function attachEvents() {
    const elements = {
        loadPostsBtn: document.querySelector('#btnLoadPosts'),
        selectDropDown: document.querySelector('#posts'),
        viewBtn: document.querySelector('#btnViewPost'),
        postTitle: document.querySelector('#post-title'),
        postBody: document.querySelector('#post-body'),
        commentsList: document.querySelector('#post-comments'),
    }

    let baseId = '';
    let postId = '';
    
    const baseURL = 'https://blog-apps-c12bf.firebaseio.com/';
    const postsURL = `${baseURL}posts.json`;

    elements.loadPostsBtn.addEventListener('click', loadPosts);
    elements.viewBtn.addEventListener('click', viewPost);

    function loadPosts(e) {
        e.preventDefault();

        fetch(postsURL)
            .then(statusCheck)
            .then(jsonParse)
            .then(createOptionsInDropdownMenu)
            .catch(errorHandler)
    }

    function viewPost(e) {
        e.preventDefault();

        postId = elements.selectDropDown.value

        const currentPostURL = `${baseURL}/posts/${baseId}/${postId}.json`;
        const currentCommentsURL = `${baseURL}comments.json`;

        Promise.all([
            fetch(currentPostURL).then(statusCheck).then(jsonParse),
            fetch(currentCommentsURL).then(statusCheck).then(jsonParse)
        ])
            .then(([postData, commentsData]) => {
                showPostInfo(postData);
                showComments(commentsData);
            })
            .catch(errorHandler);

    }
    
    function createOptionsInDropdownMenu(data) {
        baseId = Object.keys(data)[0];

        const postsObj = Object.values(data);

        elements.selectDropDown.innerHTML = '';
        
        Object.entries(postsObj[0])
            .forEach(([key, postInfo]) => {
                const option = createHTMLElement('option', postInfo.title, [{ k: 'value', v: key }]);
                elements.selectDropDown.appendChild(option);
            });
    }

    function showPostInfo(data) {
        elements.postTitle.textContent = data.title;
        elements.postBody.textContent = data.body;
    }

    function showComments(data) {
        elements.commentsList.innerHTML = '';

        Object.values(data)
            .filter(x => x.postId === postId)
            .forEach(comment => {
                const li = createHTMLElement('li', comment.text, [{ k: 'id', v: comment.id }]);
                elements.commentsList.appendChild(li);
            });
    }

    const jsonParse = (res) => res.json();

    const errorHandler = (err) => console.log(err);

    const statusCheck = res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res;
    };
    function createHTMLElement(tagName, textContent, atributes, event) {
        let element = document.createElement(tagName);

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