import { latitude, longitude, APIkey } from "./constants";
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
// b4332d280df26eef392ceece9ed2ba08

export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    // console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  // console.log(data);
  const main = data.main;
  const temperature = main && main.temp;
  console.log(Math.ceil(temperature));
  return Math.ceil(temperature);
};

// const response = {
//     "coord": {
//         "lon": 10.99,
//         "lat": 44.34
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 34.9,
//         "feels_like": 34.9,
//         "temp_min": 29.68,
//         "temp_max": 40.37,
//         "pressure": 1013,
//         "humidity": 91,
//         "sea_level": 1013,
//         "grnd_level": 925
//     },
//     "visibility": 8565,
//     "wind": {
//         "speed": 2.82,
//         "deg": 231,
//         "gust": 3.53
//     },
//     "clouds": {
//         "all": 95
//     },
//     "dt": 1702188651,
//     "sys": {
//         "type": 2,
//         "id": 2075663,
//         "country": "IT",
//         "sunrise": 1702190441,
//         "sunset": 1702222611
//     },
//     "timezone": 3600,
//     "id": 3163858,
//     "name": "Zocca",
//     "cod": 200
// }
