function stopwatch() {
    let timeField = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);

    let timer = undefined;

    function start() {
        startButton.disabled = true;
        stopButton.disabled = false;

        let seconds = 0;

        timer = setInterval(increaseTime, 1000);

        timeField.textContent = '00:00';

        function increaseTime() {
            seconds++;

            let currentMinutes = Math.floor(seconds / 60);
            let currentSeconds = seconds % 60;

            if (currentMinutes < 10) {
                currentMinutes = `0${currentMinutes}`;
            }

            if (currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`;
            }

            let momentTime = `${currentMinutes}:${currentSeconds}`;

            displayTime(timeField, momentTime);
        }

    }

    function stop() {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(timer);
    }

    function displayTime(HTMLElement, time) {
        HTMLElement.textContent = time;
    }

}