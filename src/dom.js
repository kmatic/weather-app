function renderWeatherData(data) {
    if (!data) return;

    const city = document.querySelector('.city');
    const mainTemp = document.querySelector('.main-temp');
    const mainWeather = document.querySelector('.weather-main');
    const highLow = document.querySelector('.high-low');
    const mainIcon = document.querySelector('.main-image');
    const imgIcon = document.createElement('img');

    const feels = document.querySelector('.feels');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const pressure = document.querySelector('.pressure');

    const speed = convertSpeed(data.windSpeed);

    city.textContent = data.city;
    mainTemp.textContent = `${data.temperature}\u00B0`;
    mainWeather.textContent = data.main;
    highLow.textContent = `H: ${data.high}\u00B0 L: ${data.low}\u00B0`;
    imgIcon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

    feels.textContent = `${data.feels}\u00B0`;
    humidity.textContent = `${data.humidity}%`;
    wind.textContent = `${speed} km/h`;
    pressure.textContent = `${data.pressure} hPa`;

    mainIcon.innerHTML = '';
    mainIcon.appendChild(imgIcon);
}

function checkUnit() {
    const unitSlider = document.querySelector('input[type="checkbox"');
    if (!unitSlider.checked) {
        return 'metric';
    }
    return 'imperial';
}

function convertSpeed(speed) {
    const units = checkUnit();
    if (units === 'metric') {
        return Math.round((speed * 3.6) * 10) / 10;
    } else {
        return Math.round((speed * 1.60934) * 10) / 10;
    }
}

export { renderWeatherData, checkUnit };
