const apiKey = "9f84815aa3ba415cbc483345261101";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    document.getElementById("weatherCard").style.display = "block";

    document.getElementById("cityName").innerText = 
        `${data.location.name}, ${data.location.country}`;

    document.getElementById("temperature").innerText = 
        `${data.current.temp_c}°C`;

    document.getElementById("description").innerText = 
        data.current.condition.text;

    document.getElementById("humidity").innerText = 
        data.current.humidity + "%";

    document.getElementById("wind").innerText = 
        data.current.wind_kph + " km/h";
}
