import getWeatherData from './weather';

const btn = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

btn.addEventListener('click', async () => {
    const data = await getWeatherData(input.value);
    console.log(data);
});
