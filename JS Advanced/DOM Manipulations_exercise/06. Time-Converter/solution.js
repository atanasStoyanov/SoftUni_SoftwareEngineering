// To work in judge add onload="attachEventsListeners()" to the body tag in HTML and remove eventListener="DOMContentLoaded"

function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', daysConverter);
    hoursBtn.addEventListener('click', hoursConverter);
    minutesBtn.addEventListener('click', minutesConverter);
    secondsBtn.addEventListener('click', secondsConverter);

    function daysConverter(e) {
        e.preventDefault();
        let days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    }

    function hoursConverter(e) {
        e.preventDefault();
        let hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;
    }

    function minutesConverter(e) {
        e.preventDefault();
        let minutes = Number(minutesInput.value);
        daysInput.value = minutes / 1400;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    }

    function secondsConverter(e) {
        e.preventDefault();
        let seconds = Number(secondsInput.value);
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds / 3600;
        minutesInput.value = seconds / 60;
    }
}

window.addEventListener('DOMContentLoaded', attachEventsListeners);