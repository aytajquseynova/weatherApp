fetch(`https://api.openweathermap.org/data/2.5/weather?q=baku&appid=54c3986bf88023b02c0a0a42f1134750`)
    .then((res) => res.json())
    .then((response) => {
        details(response); // Call the details function with the response
    })


function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54c3986bf88023b02c0a0a42f1134750`)
        .then((res) => res.json())
        .then((response) => {
            details(response); // Call the details function with the response
        })
}

document.getElementById("submit").addEventListener("click", function () {
    event.preventDefault();
    let searchCity = document.getElementById("searchCity").value;
    console.log(searchCity);
    getWeather(searchCity);
});

function details(response) {
    let wind = document.getElementById("wind");
    wind.textContent = `Wind \n ${response.wind.speed} mph`; // Access wind speed and display it
    let humidity = document.getElementById("humidity");
    humidity.textContent = `Humidity \n ${response.main.humidity}%`;
    let weatherLocation = document.getElementById("weatherLocation");
    weatherLocation.textContent = response.name;
    let c = document.getElementById("c");
    c.textContent = `${(response.main.temp -273.15).toFixed(2) }°C `;
    let f = document.getElementById('f');
    f.textContent = `${(((response.main.temp -273.15) *1.8 + 32).toFixed(2))}°F `;
    f.style.display ="none";
}

const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();
const weekDay = now.getDay();
const date = month + "/" + day;

let tarix = document.getElementById("date");
tarix.textContent = date;

let dayOfWeek;

switch (weekDay) {
    case 0:
        dayOfWeek = "Sun";
        break;
    case 1:
        dayOfWeek = "Mon";
        break;
    case 2:
        dayOfWeek = "Tue";
        break;
    case 3:
        dayOfWeek = "Wed";
        break;
    case 4:
        dayOfWeek = "Thu";
        break;
    case 5:
        dayOfWeek = "Fri";
        break;
    case 6:
        dayOfWeek = "Sat";
        break;
    default:
        dayOfWeek = "";
}

tarix.textContent = date + " " + dayOfWeek;

let far= document.getElementById('far');
far.addEventListener("click", function(){
    f.style.display = "block";
    c.style.display ="none";
})

let celsi = document.getElementById("celsi");
celsi.addEventListener("click", function(){
        c.style.display = "block";
        f.style.display = "none";
})