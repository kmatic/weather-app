function cleanWeatherData(data) {
    // using object destructuring
    const {
        name: city,
        weather: [{ main, icon }],
        main: {
            temp: temperature, feels_like: feels, temp_min: low, temp_max: high, humidity, pressure,
        },
        wind: { speed: windSpeed },
    } = data;

    return {
        city, main, icon, temperature, feels, low, high, humidity, pressure, windSpeed,
    };
}

async function getWeatherData(location, units) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2856f7800e7e860f5f68bc404924d79f&units=${units}`;
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = cleanWeatherData(await response.json());
        return data;
    } catch (error) {
        alert(error); // future: create less intrusive error
        return null;
    }
}

export default getWeatherData;
