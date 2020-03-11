function getInfo() {
    const stopIdRef = document.querySelector('#stopId');
    const stopNameRef = document.querySelector('#stopName');
    const busesList = document.querySelector('#buses');

    busesList.innerHTML = '';

    fetch(`https://judgetests.firebaseio.com/businfo/${stopIdRef.value}.json`)
        .then(x => x.json())
        .then(data => {
            stopNameRef.textContent = data.name;

            Object.entries(data.buses)
                .forEach(([busId, time]) => {
                    let li = document.createElement('li')
                    li.textContent = `Bus ${busId} arrives in ${time}`;

                    busesList.appendChild(li);
                });
        })
        .catch(() => stopNameRef.textContent = 'Error');
}