function getArticleGenerator(articles) {
    const contentDiv = document.getElementById('content');

    let count = 0
    
    return function () {
        if (count < articles.length) {
            const newArticle = document.createElement('article');
            newArticle.textContent = articles[count];
            contentDiv.appendChild(newArticle);
            count++;
        }
    }
 }