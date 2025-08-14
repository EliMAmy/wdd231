const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url= 'https://api.openweathermap.org/data/2.5/weather?lat=-16.40&lon=-71.54&appid=8edc53b35a592e9d0162ef57b83d5617&units=imperial';

async function apiFetchWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsWeather(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResultsWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.textContent = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", data.weather[0].description)
}
apiFetchWeather();