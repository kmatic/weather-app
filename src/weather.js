function cleanWeatherData(data) {
    // using object destructuring
    const {
        name: city,
        weather: [{ main, description, icon }],
        main: {
            temp: temperature, feels_like: feels, temp_min: low, temp_max: high, humidity,
        },
        wind: { speed: windSpeed },
    } = data;

    return {
        city, main, description, icon, temperature, feels, low, high, humidity, windSpeed,
    };
}

async function getWeatherData(location) {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2856f7800e7e860f5f68bc404924d79f`;
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) {
            throw new Error('Error');
        }
        const data = cleanWeatherData(await response.json());
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getWeatherData;
