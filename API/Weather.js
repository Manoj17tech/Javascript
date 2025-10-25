const Btn = document.querySelector("button");
const API_KEY = "95c831efe8a54e74ac042323251807";

Btn.addEventListener("click", () => {
  async function searchWeather() {
    // Get the updated input value
    const city = document.getElementById("city").value.trim();

    // Check if input is empty
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  searchWeather();
});
