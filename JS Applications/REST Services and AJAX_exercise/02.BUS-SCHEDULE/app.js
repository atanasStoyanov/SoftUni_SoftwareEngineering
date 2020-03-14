function solve() {

    const infoBox = document.querySelector('.info');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    let currentStopId = 'depot';
    let currentStopName = '';

    function depart() {

        fetch(`https://judgetests.firebaseio.com/schedule/${currentStopId}.json`)
            .then(data => {
                if (data.status !== 200) {
                    throw new Error('Error');
                }
                return data;
            })
            .then(jsonParse)
            .then(data => {
                infoBox.textContent = `Next stop ${data.name}`;

                currentStopName = data.name;
                currentStopId = data.next;
            })
            .catch(errorHandler)

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${currentStopName}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    const jsonParse = (res) => res.json();
    
    const errorHandler = () => {
        infoBox.textContent = 'Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
    };

    return {
        depart,
        arrive
    };
}

let result = solve();