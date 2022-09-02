import getWeatherData from './weather';
import { renderWeatherData, checkUnit } from './dom';

const btn = document.querySelector('button');
const input = document.querySelector('#cityName');
const form = document.querySelector('form');
const slider = document.querySelector('input[type="checkbox"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

btn.addEventListener('click', async () => {
    const units = checkUnit();
    const data = await getWeatherData(input.value, units);
    renderWeatherData(data);
});

document.addEventListener('DOMContentLoaded', async () => {
    const units = checkUnit();
    const data = await getWeatherData('Vancouver', units);
    renderWeatherData(data);
});

slider.addEventListener('click', async () => {
    const currentCity = document.querySelector('.city').textContent;
    console.log(currentCity);
    const units = checkUnit();
    const data = await getWeatherData(currentCity, units);
    renderWeatherData(data);
});
