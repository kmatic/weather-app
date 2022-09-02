import getWeatherData from './weather';
import { renderWeatherData, checkUnit } from './dom';

const btn = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

btn.addEventListener('click', async () => {
    const data = await getWeatherData(input.value);
    console.log(data);
    renderWeatherData(data);
});

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getWeatherData('Vancouver');
    renderWeatherData(data);
});

console.log(document.querySelector('input[type="checkbox"').checked);
