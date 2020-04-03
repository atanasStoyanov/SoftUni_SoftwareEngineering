export default (function notifications() {
    function handleError(reason) {
        showError(reason.message);
    }

    function showInfo(message) {
        let successBox = $('#successBox');
        successBox.text(message);
        successBox.show();
        setTimeout(() => successBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    return {
        handleError,
        showInfo,
        showError
    };

})()