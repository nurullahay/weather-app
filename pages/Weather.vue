
<template>
  <div class="container">
    <div class="container-inner">
      <div class="input-container">
        <!--Get the city selected by the user with keyup-->
        <input class="city-input-bar" type="text" name="city" v-model="city" @keyup.enter="GetWeatherData">
        <div class="searchIconBox">
          <v-icon name="search" scale="2" />
        </div>
      </div>
      <div class="content-area">
        <!--Giving class names that change dynamically depending on the weather-->
        <div class="weather-day first-day" :class="getWeatherClass(firstDayWeather.id)">
          <!--Adding div for animation effect-->
          <div class="weather-animation" style="position: absolute; width: 100%; height: 100%;"
            :class="getWeatherAnimation(firstDayWeather.id)"></div>
          <div class="desc-row">
            <div class="row-left">
              <p class="today-weather-right-desc">
                <v-icon name="tint" scale="2" />
              </p>
              <div class="more-info">
                <p>Humidity</p>
                <p>{{ firstDayWeather.humidity }}%</p>
              </div>
            </div>
            <div class="row-right">
              <div class="more-info">
                <p>Wind</p>
                <p>{{ firstDayWeather.wind }} m/s</p>
              </div>
              <p class="today-weather-right-desc">
                <v-icon name="wind" scale="2" />
              </p>
            </div>
          </div>
          <!--Get today's weather information-->
          <div class="temp-row">
            <p class="today-weather-title">{{ parseInt(firstDayWeather.temp) }}°</p>
          </div>
        </div>
        <!--Get other day's weather information-->
        <div class="other-days">
          <div v-for="(weatherData, date) in weather" :key="date" class="weather-day"
            :class="getWeatherClass(weatherData.id)">
            <h3 class="other-day-title">{{ date }}</h3>
            <div class="other-day-temp">
              <p>{{ parseInt(weatherData.temp) }}°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// Include axios in the project
import axios from 'axios'
export default {
  // Define data property and enter default city
  data() {
    return {
      weather: {},
      weatherDescription: '',
      city: 'İstanbul',
      firstDayWeather: {},
    }
  },
  methods: {
    // Getting weather data from OpenWeatherMap API
    GetWeatherData() {
      axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=201407d0a7da0276e2897b6b43c0c417&units=metric')
        .then(response => {
          console.log(response);
          let forecastData = response.data.list;
          let weatherData = {};
          // Creates an object to store daily weather data by date
          forecastData.forEach((data) => {
            // Convert date to weekday
            let date = new Date(data.dt_txt.split(' ')[0]).toLocaleDateString('en-US', { weekday: 'short' });
            if (weatherData[date]) {
              if (data.main.temp < weatherData[date].temp) {
                weatherData[date].temp = data.main.temp;
              }
            } else {
              weatherData[date] = {
                temp: data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                weatherIcon: data.weather[0].icon,
                id: data.weather[0].id
              }
            }
          });
          // Get the weather id by accessing the "id" property of the first weather forecast data inside the response
          this.weather = weatherData;
          // Get the weather information of the first day
          let firstDate = Object.keys(this.weather)[0];
          this.firstDayWeather = this.weather[firstDate];
        })
        .catch(error => {
          console.log(error)
        })
    },

    //Giving a CSS class corresponding to the weather icon based on weather data from OpenWeatherMap API
    getWeatherClass(id) {
      if (!id) return '';
      const firstChar = id.toString().charAt(0);
      switch (firstChar) {
        case '2':
          return 'thunderstorm';
        case '3':
        case '5':
          return 'rainy';
        case '6':
          return 'snowy';
        case '7':
          return 'foggy';
        case '8':
          if (id === 800) {
            return 'sunny';
          }
          return 'cloudy';
        default:
          return '';
      }
    },

    getWeatherAnimation(id) {
      if (!id) return '';
      const firstChar = id.toString().charAt(0);
      switch (firstChar) {
        case '2':
        case '3':
        case '5':
          return 'rain';
        case '6':
          return 'snow';
        case '7':
        case '8':
          return 'fog';
        default:
          return '';
      }
    }
  },
  mounted() {
    this.GetWeatherData();
  }
}

</script>
  
<style>

/* Format HTML and body */
html {
  font-family: 'Roboto', sans-serif;
}

*,
body,
*::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}

#__nuxt {
  background-color: #101014;
  min-height: 100vh;
  padding-top: 60px !important;
  color: rgb(23, 23, 23) !important;
  max-width: 100%;
  overflow: hidden;
  margin-top: 0px !important;
}

.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.container-inner {
  width: 29vw;
  height: 80vh;
  position: relative;
  margin: 0 auto;
}

.input-container {
  display: flex;
}

.city-input-bar {
  width: 100%;
  height: 55px;
  border-radius: 12px 0px 0px 12px;
  font-size: 24px;
  padding-left: 15px;
  background-color: rgb(78 140 180);
  border: none;
  font-weight: bold;
}

.searchIconBox {
  background-color: rgb(78 140 180);
  padding: 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
}

.search-icon {
  width: fit-content;
  height: 55px;
  border-radius: 12px;
  font-size: 24px;
  border: none;
  width: 20%;
  font-weight: bold;
}

.content-area {
  display: contents;
}

.weather-day {
  width: 19%;
  height: 198px;
  border-radius: 12px;
  position: relative;
  text-align: center;
}

.first-day {
  height: 80vh !important;
  width: 100% !important;
  margin: 18px auto;
  position: relative;
  background-size: cover;
  transition: background-image 1s ease-in-out;
}

.desc-row {
  display: flex;
  justify-content: space-between;
  padding: 11px;
  margin-bottom: 71px;
}

.row-left,
.row-right {
  display: flex;
  position: absolute;
  z-index: 10000;
}

.row-right {
  right: 0;
  padding-right: 10px;
}

.today-weather-right-desc {
  line-height: 35px;
  font-size: 19px;
  font-weight: bold;
  padding: 5px;
}

.today-weather-right-desc>p {
  line-height: 35px;
  font-size: 44px;
  color: #fff;
  font-weight: bold;
}

.more-info>p {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}

.temp-row {
  height: 110px;
  width: 110px;
  border-radius: 50%;
  margin: 0 auto;
}

.today-weather-title {
  line-height: 49px;
  font-size: 48px;
  font-weight: bold;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto;
  background-color: rgba(78, 140, 180, 0.8);
  padding: 30px;
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
}

.other-days {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 29vw;
  position: absolute;
  bottom: 0;
}

.other-day-title {
  padding: 5px 0px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: 1px solid #6a7983;
  width: 80%;
  margin: 0 auto;
}

.other-days .weather-day:first-child {
  display: none;
}

.other-day-temp {
  justify-content: space-between;
  padding: 5px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  position: absolute;
  width: 100%;
  bottom: 0;
  font-weight: bold;
  font-size: 18px;
  background-color: rgb(78 140 180 / 80%);
}

.today-weather-right-desc {
  line-height: 35px;
  font-size: 19px;
  font-weight: bold;
}

.today-weather-right-desc>p {
  line-height: 35px;
  font-size: 44px;
  color: #fff;
  font-weight: bold;
}

/* Animation background area start */
.sunny {
  background-image: url('/images/sunny.avif');
  border-radius: 12px;
  background-size: cover;
}

.cloudy {
  background-image: url('/images/cloud.webp');
  border-radius: 12px;
  background-size: cover;
}

.rainy {
  background-image: url('/images/rain.jpg');
  border-radius: 12px;
  background-size: cover;
  position: relative;
}

.snowy {
  background-image: url('/images/snow.jpg');
  border-radius: 12px;
  background-size: cover;
}

.thunderstorm {
  background-image: url('/images/storm.jpeg');
  border-radius: 12px;
}

.foggy {
  background-image: url('/images/foggy.jpeg');
  border-radius: 12px;
}

.snow {
  background-image: url("/images/snow2.png");
  animation: animateSnow1 9s linear infinite;
  padding: 10px 10px;
  border-radius: 12px;
}

.rain {
  background-image: url("/images/rain2.png");
  animation: animateSnow1 15s linear infinite;
  padding: 10px 10px;
  border-radius: 12px;
}

.fog {
  background-image: url("/images/fog.png");
  animation: animateSnow1 15s linear infinite;
  padding: 10px 10px;
  border-radius: 12px;
}

@keyframes animateSnow1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 800px 450px;
  }
}

/* Responsive area start */

@media only screen and (max-width: 1100px) {
  .container-inner {
    width: 36vw;
  }

  .other-days {
    width: 36vw;
  }
}

@media only screen and (max-width: 875px) {
  .container-inner {
    width: 44vw;
  }

  .other-days {
    width: 44vw;
  }

  .other-day-title {
    font-size: 18px;
  }
}

@media only screen and (max-width: 685px) {
  .container-inner {
    width: 60vw;
  }

  .other-days {
    width: 60vw;
  }

  .other-day-title {
    font-size: 16px;
  }

  .weather-day {
    height: 195px;
  }
}

@media only screen and (max-width: 500px) {

  .container-inner {
    width: 80vw;
  }

  .other-days {
    width: 80vw;
  }

  .other-day-title {
    font-size: 14px;
  }

  .first-day {
    height: 260px;
  }

  .weather-day {
    height: 178px;
  }

  .today-weather-right-desc {
    font-size: 16px;
  }
}
</style>
  