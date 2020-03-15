function attachEvents() {
    const elements = {
        locationInput: document.querySelector('#location'),
        getWeatherBtn: document.querySelector('#submit'),
        forecastDiv: document.querySelector('#forecast'),
        currentForecastDiv: document.querySelector('#current'),
        upcomingForecastDiv: document.querySelector('#upcoming')
    }

    const locationsURL = 'https://judgetests.firebaseio.com/locations.json';
    const forecastBaseURL = 'https://judgetests.firebaseio.com/forecast/';

    const weatherSymbols = {
        's': '☀',
        'p': '⛅',
        'o': '☁',
        'r': '☂',
        'd': '°'
    }

    elements.getWeatherBtn.addEventListener('click', loadWeather);

    function loadWeather(e) {
        e.preventDefault();

        const location = elements.locationInput.value;

        fetch(locationsURL)
            .then(checkResponseStatus)
            .then(jsonParse)
            .then(data => {
                const locationInfo = data.find(x => x.name === location);

                if (!locationInfo) {
                    throw new Error('Incorrect location');
                }

                const code = locationInfo.code;
                const todayForecastURL = `${forecastBaseURL}today/${code}.json`;
                const upcomingForecastURL = `${forecastBaseURL}upcoming/${code}.json`;

                Promise.all([
                    fetch(todayForecastURL).then(checkResponseStatus).then(jsonParse),
                    fetch(upcomingForecastURL).then(checkResponseStatus).then(jsonParse)
                ])
                    .then(showWeather)
                    .catch(errorHandler)

            })
            .catch(errorHandler);

    }

    function showWeather([todayData, upcomingData]) {
        elements.forecastDiv.style.display = 'block';

        clearInfo();
        displayTodayForecast(todayData);
        displayUpcommingForecast(upcomingData);

    }

    function displayTodayForecast(data) {
        const { condition, high, low } = data.forecast;

        const conditionSymbol = weatherSymbols[condition[0].toLowerCase()];
        const temperatures = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;

        let forecastsDiv = createHTMLElement('div', ['forecasts']);
        const conditionSymbolSpan = createHTMLElement('span', ['condition', 'symbol'], conditionSymbol);
        let conditionWrapper = createHTMLElement('span', ['condition']);
        const locationSpan = createHTMLElement('span', ['forecast-data'], `${data.name}`);
        const temperaturesSpan = createHTMLElement('span', ['forecast-data'], temperatures);
        const conditionSpan = createHTMLElement('span', ['forecast-data'], condition);

        conditionWrapper = appendChildrenToParent([locationSpan, temperaturesSpan, conditionSpan], conditionWrapper);
        forecastsDiv = appendChildrenToParent([conditionSymbolSpan, conditionWrapper], forecastsDiv);
        elements.currentForecastDiv.appendChild(forecastsDiv);
    }

    function displayUpcommingForecast(data) {
        data.forecast.forEach(({ condition, high, low }) => {
            const conditionSymbol = weatherSymbols[condition[0].toLowerCase()];
            const temperatures = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;

            let forecastsDiv = createHTMLElement('div', ['forecast-info']);
            let conditionWrapper = createHTMLElement('span', ['upcoming']);
            const conditionSymbolSpan = createHTMLElement('span', ['symbol'], conditionSymbol);
            const temperaturesSpan = createHTMLElement('span', ['forecast-data'], temperatures);
            const conditionSpan = createHTMLElement('span', ['forecast-data'], condition);

            conditionWrapper = appendChildrenToParent([conditionSymbolSpan, temperaturesSpan, conditionSpan], conditionWrapper);
            forecastsDiv.appendChild(conditionWrapper);
            elements.upcomingForecastDiv.appendChild(forecastsDiv);
        })
    }

    function clearInfo() {
        const currentForecastDiv = document.querySelector('div.forecasts');
        const upcomingForecstDivs = document.querySelectorAll('div.forecast-info');
        const errorHeading = document.querySelector('h1.notification');

        if (currentForecastDiv && upcomingForecstDivs.length > 0) {
            currentForecastDiv.remove();
            upcomingForecstDivs.forEach(div => div.remove());
        }

        if (errorHeading) {
            errorHeading.remove();
        }
    }

    const checkResponseStatus = res => {
        if (res.status > 400) {
            throw new Error(res.statusText);
        }
        return res;
    };

    const jsonParse = (res) => res.json();

    const errorHandler = (err) => {
        const errorHeading = createHTMLElement('h1', ['notification'], err.message);
        clearInfo()
        elements.forecastDiv.appendChild(errorHeading);
        elements.forecastDiv.style.display = 'block';
    };

    function createHTMLElement(tagName, classNames, textContent) {
        let element = document.createElement(tagName);

        if (classNames) {
            element.classList.add(...classNames);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }

    function appendChildrenToParent(childrenArr, parent) {
        childrenArr.forEach(c => parent.appendChild(c));
        return parent;
    }

}

attachEvents();