function loadCommits() {
    const elements = {
        usernameRef: document.querySelector('#username'),
        repoRef: document.querySelector('#repo'),
        commitsListRef: document.querySelector('#commits')
    }

    const username = elements.usernameRef.value;
    const repository = elements.repoRef.value;

    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    const jsonParse = (res) => res.json();

    const errorHandler = (er) => {
        const error = JSON.parse(er.message);

        elements.commitsListRef.innerHTML = '';

        let li = document.createElement('li');
        li.textContent = `Error: ${error.status} (${error.statusText})`;

        elements.commitsListRef.appendChild(li);
    }


    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(JSON.stringify({
                    status: res.status,
                    statusText: res.statusText
                }));
            }
            return res;
        })
        .then(jsonParse)
        .then(data => {

            elements.commitsListRef.innerHTML = '';

            data.forEach(element => {
                const authorName = element.commit.author.name;
                const message = element.commit.message;

                let li = document.createElement('li');
                li.textContent = `${authorName}: ${message}`;

                elements.commitsListRef.appendChild(li);
            });

        })
        .catch(errorHandler);

}