// This will not work in Judge as I changed the HTML. 
// To work in judge remove eventListner and add onclick = "createArticle()" to the button in the HTML.

function createArticle() {
	let titleInput = document.getElementById('createTitle');
	let textInput = document.getElementById('createContent');
	let acrticlesArea = document.getElementById('articles');

	if (titleInput === null || textInput === null || acrticlesArea === null) {
		throw new Error('Something is wrong...');
	}

	let articleTitle = titleInput.value;
	let articleText = textInput.value;

	if (articleTitle !== '' && articleText !== '') {
		let h3 = document.createElement('h3');
		h3.innerHTML = articleTitle;

		let p = document.createElement('p');
		p.innerHTML = articleText;

		let article = document.createElement('article');
		article.appendChild(h3)
		article.appendChild(p);

		acrticlesArea.appendChild(article);

		titleInput.value = '';
		textInput.value = '';
	}

}

document.addEventListener('DOMContentLoaded', x => {
	document
		.getElementById('button')
		.addEventListener('click', createArticle);
});

