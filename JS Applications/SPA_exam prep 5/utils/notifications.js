export default (function notifications() {
    function handleError(reason) {
        showError(reason.message);
    }

    function showInfo(message) {
        let successBox = $('#successBox');
        successBox.text(message);
        successBox.show();
        document.addEventListener('click', () => {
            successBox.fadeOut();
        });
        setTimeout(() => successBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        document.addEventListener('click', () => {
            errorBox.fadeOut();
        })
        setTimeout(() => errorBox.fadeOut(), 5000);
    }

    return {
        handleError,
        showInfo,
        showError
    };

})()