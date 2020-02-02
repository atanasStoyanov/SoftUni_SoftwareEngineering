//To work in Judge remove window.addEventListener and add onload="attachEventsListeners()" to the body tag in HTML;

function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let convertBtn = document.getElementById('convert');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let outputDistance = document.getElementById('outputDistance');

    if (inputDistance === null || convertBtn === null || inputUnits === null || outputUnits === null || outputDistance === null) {
        throw new Error('Error...');
    }

    convertBtn.addEventListener('click', convertDistance);

    function convertDistance(e) {
        e.preventDefault();
        let distance = Number(inputDistance.value); 
        let inputUnit = inputUnits.options[inputUnits.selectedIndex].value;
        let outputUnit = outputUnits.options[outputUnits.selectedIndex].value;
        let convertedDistance = convert(distance, inputUnit, outputUnit);

        outputDistance.value = convertedDistance;
        
    }

    let unitsToMeterMap = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convert(num, from, to) {
        let numToM = num * unitsToMeterMap[from];
        let converted = numToM / unitsToMeterMap[to];

        return converted;
    }

}

window.addEventListener('DOMContentLoaded', attachEventsListeners);