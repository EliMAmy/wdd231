
// select HTML elements in the document
const lat = -16.40;
const lon = -71.54;
const apiKey = "8edc53b35a592e9d0162ef57b83d5617"
const forecast = document.querySelector("#forecast");
const list_of_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const cityForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=` + apiKey + "&lat=" + lat + "&lon=" + lon;

async function apiFetch() {
    try {
        const response = await fetch(cityForecastUrl);
        if (response.ok) {
            const jsObject = await response.json();
            console.log(jsObject);
            displayResults(jsObject);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(jsObject) {

    for (let index = 0; index < 40; index++) {

        if (jsObject.list[index].dt_txt.substring(11) == "18:00:00") {

            let date = new Date(jsObject.list[index].dt_txt);
            let day = date.getDay();
            let day_container = document.createElement('div');
            let day_name = document.createElement('p');
            let day_temp = document.createElement('p');

            day_name.innerHTML = list_of_days[day];
            day_name.setAttribute('class', 'name-day');
            day_temp.setAttribute('class', 'day-temperature');
            day_container.setAttribute("class", "container");
            day_temp.innerHTML = Math.round(jsObject.list[index].main.temp) + '&deg; F';
            day_container.appendChild(day_name);
            day_container.appendChild(day_temp);
            forecast.appendChild(day_container);
        }
    }
    
}
apiFetch();