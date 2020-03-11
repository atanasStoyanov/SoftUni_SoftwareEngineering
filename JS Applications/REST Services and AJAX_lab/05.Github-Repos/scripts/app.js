function loadRepos() {
	const username = document.querySelector('#username');
	const repositoriesList = document.querySelector('#repos');
	repositoriesList.innerHTML = '';

	fetch(`https://api.github.com/users/${username.value}/repos`)
		.then(x => x.json())
		.then(repos => {
			repos.forEach(repo => {
				const newListItem = document.createElement('li');
				const link = document.createElement('a');
				link.href = repo.html_url;
				link.textContent = repo.full_name;

				newListItem.appendChild(link);
				repositoriesList.appendChild(newListItem);
			});
		})
		.catch();
}