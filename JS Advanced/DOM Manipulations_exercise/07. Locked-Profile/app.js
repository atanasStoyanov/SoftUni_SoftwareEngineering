function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName('profile'));

    for (const profile of profiles) {
        const unlockOption = profile.getElementsByTagName('input')[1];
        const hiddenInfo = profile.getElementsByTagName('div')[0];
        const button = profile.getElementsByTagName('button')[0];

        button.addEventListener('click', showInfo);

        function showInfo(e) {
            e.preventDefault();

            if (unlockOption.checked === true) {
                if (button.textContent === 'Show more') {
                    hiddenInfo.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenInfo.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', lockedProfile);